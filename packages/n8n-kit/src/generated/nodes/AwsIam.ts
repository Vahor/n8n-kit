// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/IAM/AwsIam.node.ts' node

export const description = "Interacts with Amazon IAM" as const;
export const type = "n8n-nodes-base.awsIam" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsIamNodeParameters {
    /** Default: "user" */
    readonly resource?: "user" | "group";

    /** Default: "getAll" */
    readonly operation?: "addToGroup" | "create" | "delete" | "get" | "getAll" | "removeFromGroup" | "update" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Select the user you want to add to the group
     * Default: {"mode":"list","value":""}
     */
    readonly user?: {
	value: string,
	mode: "list" | "userName",
};

    /**
     * Select the group you want to add the user to
     * Default: {"mode":"list","value":""}
     */
    readonly group?: {
	value: string,
	mode: "list" | "groupName",
};

    /**
     * The username of the new user to create
     * Type options: {"maxLength":64,"regex":"^[A-Za-z0-9+=,\\.@_-]+$"}
     */
    readonly userName?: string;

    /** Default: {} */
    readonly additionalFields?: { path?: string, permissionsBoundary?: string, tags?: { tags: Array<{ key?: string, value?: string }> } } | { pathPrefix?: string } | { path?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * The name of the new group to create
     * Type options: {"maxLength":128,"regex":"^[+=,.@\\-_A-Za-z0-9]+$"}
     */
    readonly groupName?: string;

    /** Whether to include a list of users in the group */
    readonly includeUsers?: boolean;

}
