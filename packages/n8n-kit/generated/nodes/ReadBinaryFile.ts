// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ReadBinaryFile/ReadBinaryFile.node.ts' node

export const name = "readBinaryFile" as const;
export const description = "Reads a binary file from disk" as const;
export const version = 1 as const;
export const defaults = { name: "Read Binary File", color: "#449922" } as const;
export const credentials = undefined;

/**
 * Reads a binary file from disk
 */
export interface ReadBinaryFileNodeParameters {
	/**
	 * Path of the file to read
	 */
	readonly filePath: string;

	/**
	 * Name of the binary property to which to write the data of the read file
	 * Default: "data"
	 */
	readonly dataPropertyName: string;
}
