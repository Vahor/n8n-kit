// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/NextCloud/NextCloud.node.ts' node

export const description = "Access data on Nextcloud" as const;
export const type = "n8n-nodes-base.nextCloud" as const;
export const version = 1 as const;
export const credentials = [{"name":"nextCloudApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"nextCloudOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NextCloudNodeParameters {
    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "file"
     */
    readonly resource?: "file" | "folder" | "user";

    /**
     * Default: "upload"
     */
    readonly operation?: "copy" | "delete" | "download" | "move" | "share" | "upload" | "copy" | "create" | "delete" | "list" | "move" | "share" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The path of file or folder to copy. The path should start with "/".
     */
    readonly path?: string;

    /**
     * The destination path of file or folder. The path should start with "/".
     */
    readonly toPath?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    readonly binaryDataUpload?: boolean;

    /**
     * The text content of the file to upload
     */
    readonly fileContent?: string;

    /**
     * The share permissions to set
     */
    readonly shareType?: "7" | "4" | "1" | "3" | "0";

    /**
     * The ID of the circle to share with
     */
    readonly circleId?: string;

    /**
     * The Email address to share with
     */
    readonly email?: string;

    /**
     * The ID of the group to share with
     */
    readonly groupId?: string;

    /**
     * The user to share with
     */
    readonly user?: string;

    /**
     * Default: {}
     */
    readonly options?: { "password"?: string, "permissions"?: "31" | "4" | "8" | "1" | "2" } | { "search"?: string, "offset"?: number };

    /**
     * Username the user will have
     */
    readonly userId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "displayName"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly updateFields?: { "field": any };

}
