// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Matrix/Matrix.node.ts' node

export const name = "matrix" as const;
export const description = "Consume Matrix API" as const;
export const version = 1 as const;
export const defaults = { name: "Matrix" } as const;
export const credentials = [{ name: "matrixApi", required: true }] as const;

/**
 * Consume Matrix API
 */
export interface MatrixNodeParameters {
	/**
	 * Default: "message"
	 */
	readonly resource?:
		| "account"
		| "event"
		| "media"
		| "message"
		| "room"
		| "roomMember";
}
