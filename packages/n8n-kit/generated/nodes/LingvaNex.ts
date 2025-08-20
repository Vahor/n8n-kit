// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/LingvaNex/LingvaNex.node.ts' node

export const name = "lingvaNex" as const;
export const description = "Consume LingvaNex API" as const;
export const version = 1 as const;
export const defaults = { name: "LingvaNex" } as const;
export const credentials = [{ name: "lingvaNexApi", required: true }] as const;

/**
 * Consume LingvaNex API
 */
export interface LingvaNexNodeParameters {
	/**
	 * Default: "translate"
	 */
	readonly operation?: "translate";

	/**
	 * The input text to translate
	 */
	readonly text: string;

	/**
	 * The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
	 * Type options: {"loadOptionsMethod":"getLanguages"}
	 */
	readonly translateTo: string;

	/**
	 * Default: {}
	 */
	readonly options?: { from: string; platform: string; translateMode: string };
}
