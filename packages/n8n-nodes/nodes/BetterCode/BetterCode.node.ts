import { Code } from "n8n-nodes-base/dist/nodes/Code/Code.node";
import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	NodeConnectionTypes,
} from "n8n-workflow";
import { CREDENTIALS_NAMES } from "../constants";

export class BetterCode implements INodeType {
	description: INodeTypeDescription = {
		displayName: "BetterCode",
		name: "betterCode",
		icon: "fa:code",
		group: ["transform"],
		version: 1,
		description: "Code node extended with credentials",
		defaults: { name: "BetterCode" },

		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],

		// https://github.com/n8n-io/n8n/blob/e46f5137a02418021b67292c82fe8e4f4ec91da5/packages/core/src/execution-engine/node-execution-context/node-execution-context.ts#L266-L272
		// Only HTTP nodes are not required to pass the full list of credentials
		// so we have to list them all YEY !!
		// TODO: if we hide using displayOption the credential is no usable.
		//       but if we list them all, the node is not usable on the ui as it want to show all of them
		credentials: CREDENTIALS_NAMES.filter((name) =>
			name.startsWith("openAi"),
		).map((name) => ({
			name,
			required: false,
		})),

		properties: [
			// custom
			{
				displayName: "Generic Auth Type",
				name: "genericAuthType",
				type: "credentialsSelect",
				noDataExpression: true,
				credentialTypes: [
					"extends:oAuth2Api",
					"extends:oAuth1Api",
					"has:authenticate",
				],
				default: "",
				required: false,
			},
			// Base Code
			{
				displayName: "Mode",
				name: "mode",
				type: "options",
				noDataExpression: true,
				options: [
					{
						name: "Run Once for All Items",
						value: "runOnceForAllItems",
						description:
							"Run this code only once, no matter how many input items there are",
					},
					{
						name: "Run Once for Each Item",
						value: "runOnceForEachItem",
						description: "Run this code as many times as there are input items",
					},
				],
				default: "runOnceForAllItems",
			},
			{
				displayName: "Language",
				name: "language",
				type: "options",
				noDataExpression: true,
				options: [
					{
						name: "JavaScript",
						value: "javaScript",
						action: "Code in JavaScript",
					},
				],
				default: "javaScript",
			},
			{
				displayName: "JavaScript",
				name: "jsCode",
				type: "string",
				typeOptions: {
					editor: "codeNodeEditor",
					editorLanguage: "javaScript",
				},
				default: "",
				description:
					'JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>.',
				noDataExpression: true,
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let cred: any = null;
		const genericAuthType = this.getNodeParameter(
			"genericAuthType",
			0,
		) as string;
		cred = await this.getCredentials(genericAuthType, 0);

		// HACK: was not able to override helpers or context, so we override the
		//       code value to add the credentials
		const origialGetNodeParameter = this.getNodeParameter.bind(this);
		// @ts-expect-error: yeah it's a hack
		this.getNodeParameter = (name, index) => {
			const result = origialGetNodeParameter.call(this, name, index);
			if (name !== "jsCode") {
				return result;
			}
			return `
				const $creds = ${JSON.stringify(cred, null, 2)} 
				${result}
			`;
		};

		const nativeCodeNode = new Code();
		return await nativeCodeNode.execute.call(this);
	}
}
