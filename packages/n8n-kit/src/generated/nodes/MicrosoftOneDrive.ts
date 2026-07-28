// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDrive.node.ts' node

export const description = "Consume Microsoft OneDrive API" as const;
export const type = "n8n-nodes-base.microsoftOneDrive" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"microsoftOneDriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOneDriveOAuth2Api"]}}},{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftOneDriveNodeParameters {
    /** Default: "microsoftOneDriveOAuth2Api" */
    readonly authentication?: "microsoftOneDriveOAuth2Api" | "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

    /**
     * Which drive the Service Principal should act on (app-only has no personal drive)
     * Default: "user"
     */
    readonly resourceTarget?: "user" | "drive";

    /**
     * The user whose OneDrive the Service Principal should act on. Evaluated per input item, so an expression can target a different user for each item.
     * Default: {"mode":"id","value":""}
     */
    readonly userTarget?: {
	value: string,
	mode: "id",
};

    /**
     * The drive the Service Principal should act on. Evaluated per input item, so an expression can target a different drive for each item.
     * Default: {"mode":"id","value":""}
     */
    readonly driveTarget?: {
	value: string,
	mode: "id",
};

    /** Default: "file" */
    readonly resource?: "file" | "folder";

    /** Default: "upload" */
    readonly operation?: "copy" | "delete" | "download" | "get" | "move" | "rename" | "search" | "share" | "upload" | "create" | "delete" | "getChildren" | "move" | "rename" | "search" | "share";

    readonly fileId?: string;

    /** Default: {} */
    readonly additionalFields?: { name?: string };

    /**
     * Reference to the parent item the copy will be created in <a href="https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/itemreference?view=odsp-graph-online"> Details </a>
     * Default: {}
     */
    readonly parentReference?: { driveId?: string, driveType?: string, id?: string, listId?: string, name?: string, path?: string, shareId?: string, siteId?: string };

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** ID of the destination folder to move the item into. Use `root` for the drive's top-level folder. */
    readonly destinationFolderId?: string;

    /** ID of the file */
    readonly itemId?: string;

    /** New name for file */
    readonly newName?: string;

    /** The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content. */
    readonly query?: string;

    /** The type of sharing link to create */
    readonly type?: "view" | "edit" | "embed";

    /** The type of sharing link to create */
    readonly scope?: "anonymous" | "organization";

    /** The name the file should be saved as */
    readonly fileName?: string;

    /** ID of the parent folder that will contain the file. Use `root` for the drive's top-level folder. */
    readonly parentId?: string;

    /** Whether the data to upload should be taken from binary field */
    readonly binaryData?: boolean;

    /** The text content of the file */
    readonly fileContent?: string;

    /** The name or path of the folder */
    readonly name?: string;

    /** Default: {} */
    readonly options?: { parentFolderId?: string };

    /** The ID of the folder. Use `root` for the top-level folder. */
    readonly folderId?: string;

}
