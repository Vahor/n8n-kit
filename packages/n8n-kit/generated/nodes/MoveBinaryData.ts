// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MoveBinaryData/MoveBinaryData.node.ts' node

export const name = "moveBinaryData" as const;
export const description =
	"Move data between binary and JSON properties" as const;
export const version = 1.1 as const;
export const defaults = {
	name: "Convert to/from binary data",
	color: "#7722CC",
} as const;
export const credentials = undefined;

/**
 * Move data between binary and JSON properties
 */
export interface MoveBinaryDataNodeParameters {
	/**
	 * From and to where data should be moved
	 * Default: "binaryToJson"
	 */
	readonly mode?: "binaryToJson" | "jsonToBinary";

	/**
	 * Whether all JSON data should be replaced with the data retrieved from binary key. Else the data will be written to a single key.
	 * Default: true
	 */
	readonly setAllData?: boolean;

	/**
	 * The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
	 * Default: "data"
	 */
	readonly sourceKey: string;

	/**
	 * The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
	 * Default: "data"
	 */
	readonly destinationKey: string;

	/**
	 * Whether all JSON data should be converted to binary. Else only the data of one key will be converted.
	 * Default: true
	 */
	readonly convertAllData?: boolean;

	/**
	 * Default: {}
	 */
	readonly options?: {
		addBOM: boolean;
		dataIsBase64: boolean;
		encoding: string;
		stripBOM: boolean;
		fileName: string;
		jsonParse: boolean;
		keepSource: boolean;
		keepAsBase64: boolean;
		mimeType: string;
		useRawData: boolean;
	};
}
