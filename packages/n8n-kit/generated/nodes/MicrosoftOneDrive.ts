// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDrive.node.ts' node

export const name = "microsoftOneDrive" as const;
export const description = "Consume Microsoft OneDrive API" as const;
export const version = 1 as const;

/**
 * Consume Microsoft OneDrive API
 */
export interface MicrosoftOneDriveNodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "file" | "folder";

    /**
     * Default: "upload"
     */
    readonly operation?: "copy" | "delete" | "download" | "get" | "rename" | "search" | "share" | "upload" | "create" | "delete" | "getChildren" | "rename" | "search" | "share";

    /**
     */
    readonly fileId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "name"?: string };

    /**
     * Reference to the parent item the copy will be created in <a href="https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/itemreference?view=odsp-graph-online"> Details </a>
     * Default: {}
     */
    readonly parentReference?: { "driveId"?: string, "driveType"?: string, "id"?: string, "listId"?: string, "name"?: string, "path"?: string, "shareId"?: string, "siteId"?: string };

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * ID of the file
     */
    readonly itemId?: string;

    /**
     * New name for file
     */
    readonly newName?: string;

    /**
     * The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content.
     */
    readonly query?: string;

    /**
     * The type of sharing link to create
     */
    readonly type?: "view" | "edit" | "embed";

    /**
     * The type of sharing link to create
     */
    readonly scope?: "anonymous" | "organization";

    /**
     * The name the file should be saved as
     */
    readonly fileName?: string;

    /**
     * ID of the parent folder that will contain the file
     */
    readonly parentId?: string;

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file
     */
    readonly fileContent?: string;

    /**
     * The name or path of the folder
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly options?: { "parentFolderId"?: string };

    /**
     */
    readonly folderId?: string;


}

