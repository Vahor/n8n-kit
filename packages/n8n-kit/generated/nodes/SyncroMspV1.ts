// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SyncroMSP/v1/SyncroMspV1.node.ts' node

export const name = "syncroMsp" as const;
export const description = "Gets data from SyncroMSP" as const;
export const version = 1 as const;
export const defaults = {"name":"SyncroMSP"} as const;
export const credentials = [{"name":"syncroMspApi","required":true,"testedBy":"syncroMspApiCredentialTest"}] as const

/**
 * Gets data from SyncroMSP
 */
export interface SyncroMspV1NodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "customer" | "rmm" | "ticket";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "mute";


}

