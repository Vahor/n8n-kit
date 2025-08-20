// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/NocoDB/NocoDB.node.ts' node

export const name = "nocoDb" as const;
export const description = "Read, update, write and delete data from NocoDB" as const;
export const version = 3 as const;
export const defaults = {"name":"NocoDB"} as const;
export const credentials = [{"name":"nocoDb","required":true,"displayOptions":{"show":{"authentication":["nocoDb"]}}},{"name":"nocoDbApiToken","required":true,"displayOptions":{"show":{"authentication":["nocoDbApiToken"]}}}] as const

/**
 * Read, update, write and delete data from NocoDB
 */
export interface NocoDBNodeParameters {

    /**
     * Default: "nocoDb"
     */
    readonly authentication?: "nocoDbApiToken" | "nocoDb";

    /**
     * Default: 1
     */
    readonly version?: "1" | "2" | "3";

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";


}

