// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Html/Html.node.ts' node

export const name = "html" as const;
export const description = "Work with HTML" as const;
export const version = 1.2 as const;
export const defaults = { name: "HTML" } as const;
export const credentials = undefined;

/**
 * Work with HTML
 */
export interface HtmlNodeParameters {
	/**
	 * Default: "generateHtmlTemplate"
	 */
	readonly operation?:
		| "generateHtmlTemplate"
		| "extractHtmlContent"
		| "convertToHtmlTable";

	/**
	 * HTML template to render
	 * Default: "placeholder"
	 * Type options: {"editor":"htmlEditor"}
	 */
	readonly html?: string;

	/**
	 */
	readonly notice?: string;

	/**
	 * If HTML should be read from binary or JSON data
	 * Default: "json"
	 */
	readonly sourceData?: "binary" | "json";

	/**
	 * Default: "data"
	 */
	readonly dataPropertyName: string;

	/**
	 * Default: {}
	 */
	readonly options?: {
		trimValues: boolean;
		cleanUpText: boolean;
		capitalize: boolean;
		customStyling: boolean;
		caption: string;
		tableAttributes: string;
		headerAttributes: string;
		rowAttributes: string;
		cellAttributes: string;
	};
}
