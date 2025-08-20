// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Dropbox/Dropbox.node.ts' node

export const name = "dropbox" as const;
export const description = "Access data on Dropbox" as const;
export const version = 1 as const;
export const defaults = { name: "Dropbox" } as const;
export const credentials = [
	{
		name: "dropboxApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "dropboxOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Access data on Dropbox
 */
export interface DropboxNodeParameters {
	/**
	 * Means of authenticating with the service
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * Default: "file"
	 */
	readonly resource?: "file" | "folder" | "search";

	/**
	 * Default: "upload"
	 */
	readonly operation?:
		| "copy"
		| "delete"
		| "download"
		| "move"
		| "upload"
		| "create"
		| "list"
		| "query";

	/**
	 * The path of file or folder to copy
	 */
	readonly path: string;

	/**
	 * The destination path of file or folder
	 */
	readonly toPath: string;

	/**
	 * Default: "data"
	 */
	readonly binaryPropertyName: string;

	/**
	 * Whether the data to upload should be taken from binary field
	 */
	readonly binaryData?: boolean;

	/**
	 * The text content of the file to upload
	 */
	readonly fileContent?: string;

	/**
	 * The string to search for. May match across multiple fields based on the request arguments.
	 */
	readonly query: string;

	/**
	 * The string to search for. May match across multiple fields based on the request arguments.
	 * Default: "active"
	 */
	readonly fileStatus?: "active" | "deleted";

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll?: boolean;

	/**
	 * Max number of results to return
	 * Default: 100
	 * Type options: {"minValue":1}
	 */
	readonly limit?: number;

	/**
	 * Whether to return a simplified version of the response instead of the raw data
	 * Default: true
	 */
	readonly simple?: boolean;

	/**
	 * Default: {}
	 */
	readonly filters?: {
		file_categories: (
			| "audio"
			| "document"
			| "paper"
			| "folder"
			| "image"
			| "other"
			| "pdf"
			| "presentation"
			| "spreadsheet"
			| "video"
		)[];
		file_extensions: string;
		path: string;
		include_deleted: boolean;
		include_has_explicit_shared_members: boolean;
		include_mounted_folders: boolean;
		include_non_downloadable_files: boolean;
		recursive: boolean;
	};
}
