// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Formstack/FormstackTrigger.node.ts' node

export const name = "formstackTrigger" as const;
export const description =
	"Starts the workflow on a Formstack form submission." as const;
export const version = 1 as const;
export const defaults = { name: "Formstack Trigger" } as const;
export const credentials = [
	{
		name: "formstackApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "formstackOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Starts the workflow on a Formstack form submission.
 */
export interface FormstackTriggerNodeParameters {
	/**
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * The Formstack form to monitor for new submissions. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
	 * Type options: {"loadOptionsMethod":"getForms"}
	 */
	readonly formId: string;

	/**
	 * Whether to return a simplified version of the response instead of the raw data
	 * Default: true
	 */
	readonly simple?: boolean;
}
