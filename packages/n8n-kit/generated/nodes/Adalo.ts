// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Adalo/Adalo.node.ts' node

export const name = "adalo" as const;
export const description = "Consume Adalo API" as const;
export const version = 1 as const;
export const defaults = { name: "Adalo" } as const;
export const credentials = [{ name: "adaloApi", required: true }] as const;

/**
 * Consume Adalo API
 */
export interface AdaloNodeParameters {
	/**
	 * Default: "collection"
	 */
	readonly resource?: "collection";

	/**
	 * Default: "getAll"
	 */
	readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

	/**
	 * Open your Adalo application and click on the three buttons beside the collection name, then select API Documentation
	 */
	readonly collectionId: string;
}
