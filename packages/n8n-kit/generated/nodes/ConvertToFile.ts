// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Files/ConvertToFile/ConvertToFile.node.ts' node

export const name = "convertToFile" as const;
export const description = "Convert JSON data to binary data" as const;
export const version = 1.1 as const;
export const defaults = { name: "Convert to File" } as const;
export const credentials = undefined;

/**
 * Convert JSON data to binary data
 */
export interface ConvertToFileNodeParameters {
	/**
	 * Default: "csv"
	 */
	readonly operation?:
		| "csv"
		| "html"
		| "iCal"
		| "toJson"
		| "ods"
		| "rtf"
		| "toText"
		| "xls"
		| "xlsx"
		| "toBinary";
}
