// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bitwarden/Bitwarden.node.ts' node

export const description = "Consume the Bitwarden API" as const;
export const type = "n8n-nodes-base.bitwarden" as const;
export const version = 1 as const;
export const credentials = [{"name":"bitwardenApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BitwardenNodeParameters {
    /** Default: "collection" */
    readonly resource?: "collection" | "event" | "group" | "member";

    /** Default: "get" */
    readonly operation?: "delete" | "get" | "getAll" | "update" | "getAll" | "create" | "delete" | "get" | "getAll" | "getMembers" | "update" | "updateMembers" | "create" | "delete" | "get" | "getGroups" | "getAll" | "update" | "updateGroups";

    /** The identifier of the collection */
    readonly collectionId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly updateFields?: { groups?: unknown[], externalId?: string } | { accessAll?: boolean, collections?: unknown[], externalId?: string, name?: string } | { type?: 0 | 1 | 2 | 3, collections?: unknown[], externalId?: string, accessAll?: boolean };

    /** Default: {} */
    readonly filters?: { actingUserId?: string, end?: string, itemID?: string, start?: string };

    /** The identifier of the group */
    readonly groupId?: string;

    /** The name of the group to create */
    readonly name?: string;

    /** Whether to allow this group to access all collections within the organization, instead of only its associated collections. If set to true, this option overrides any collection assignments. */
    readonly accessAll?: boolean;

    /** Default: {} */
    readonly additionalFields?: { collections?: unknown[], externalId?: string };

    /** Comma-separated list of IDs of members to set in a group */
    readonly memberIds?: string;

    /** The identifier of the member */
    readonly memberId?: string;

    /** Default: 2 */
    readonly type?: 0 | 1 | 2 | 3;

    /** The email of the member to update */
    readonly email?: string;

    /** Comma-separated list of IDs of groups to set for a member */
    readonly groupIds?: string;

}
