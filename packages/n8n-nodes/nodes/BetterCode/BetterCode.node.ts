import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	NodeConnectionTypes,
} from "n8n-workflow";

import { Code } from "n8n-nodes-base/dist/nodes/Code/Code.node";

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

		credentials: [],

		properties: [
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
		try {
			const genericAuthType = this.getNodeParameter(
				"genericAuthType",
				0,
			) as string;
			cred = await this.getCredentials(genericAuthType, 0);
		} catch {}

		console.log("cred", cred);

		const nativeCodeNode = new Code();
		// @ts-ignore
		const dataProxy = this.getWorkflowDataProxy(0);
		dataProxy.$creds = {
			cred,
			test: 1,
		};

		// @ts-ignore
		// Monkey-patch the execution context to expose credentials
		// This makes "cred" available inside the Code node execution environment
		this.helpers.creds = () => ({ cred, test: 1 });

		// Forward the execution call into the real Code node
		return await nativeCodeNode.execute.call(this);
	}
}
