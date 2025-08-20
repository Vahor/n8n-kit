// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/S3/S3.node.ts' node

export const name = "s3" as const;
export const description = "Sends data to any S3-compatible service" as const;
export const version = 1 as const;
export const defaults = { name: "S3" } as const;
export const credentials = [{ name: "s3", required: true }] as const;

/**
 * Sends data to any S3-compatible service
 */
export interface S3NodeParameters {
	/**
	 */
	readonly s3StandardNotice?: string;

	/**
	 * Default: "file"
	 */
	readonly resource?: "bucket" | "file" | "folder";
}
