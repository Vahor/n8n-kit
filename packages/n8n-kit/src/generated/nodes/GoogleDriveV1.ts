// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Drive/v1/GoogleDriveV1.node.ts' node

export const description = "Access data on Google Drive" as const;
export const type = "n8n-nodes-base.googleDrive" as const;
export const version = 2 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleDriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleDriveV1NodeParameters {
    /**
     * Default: "serviceAccount"
     */
    readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2" | "serviceAccount";

    /**
     * Default: "file"
     */
    readonly resource?: "drive" | "file" | "folder";

    /**
     * Default: "upload"
     */
    readonly operation?: "copy" | "delete" | "download" | "list" | "share" | "update" | "upload" | "create" | "delete" | "share" | "create" | "delete" | "get" | "list" | "update";

    /**
     * The ID of the file
     * Default: {"mode":"list","value":""}
     */
    readonly fileId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "googleFileConversion"?: { "conversion": any }, "fileName"?: string } | { "fields"?: ("*" | "explicitlyTrashed" | "exportLinks" | "hasThumbnail" | "iconLink" | "id" | "kind" | "mimeType" | "name" | "permissions" | "shared" | "spaces" | "starred" | "thumbnailLink" | "trashed" | "version" | "webViewLink")[] } | { "emailMessage"?: string, "enforceSingleParent"?: boolean, "fields"?: ("*" | "explicitlyTrashed" | "exportLinks" | "hasThumbnail" | "iconLink" | "id" | "kind" | "mimeType" | "name" | "permissions" | "shared" | "spaces" | "starred" | "thumbnailLink" | "trashed" | "version" | "webViewLink")[], "moveToNewOwnersRoot"?: boolean, "sendNotificationEmail"?: boolean, "supportsAllDrives"?: boolean, "transferOwnership"?: boolean, "useDomainAdminAccess"?: boolean, "name"?: string, "parents"?: string, "spaces"?: ("*" | "appDataFolder" | "drive" | "photos")[], "corpora"?: "user" | "domain" | "drive" | "allDrives", "driveId"?: string } | { "capabilities"?: { "canAddChildren"?: boolean, "canChangeCopyRequiresWriterPermissionRestriction"?: boolean, "canChangeDomainUsersOnlyRestriction"?: boolean, "canChangeDriveBackground"?: boolean, "canChangeDriveMembersOnlyRestriction"?: boolean, "canComment"?: boolean, "canCopy"?: boolean, "canDeleteChildren"?: boolean, "canDeleteDrive"?: boolean, "canDownload"?: boolean, "canEdit"?: boolean, "canListChildren"?: boolean, "canManageMembers"?: boolean, "canReadRevisions"?: boolean, "canRename"?: boolean, "canRenameDrive"?: boolean, "canShare"?: boolean, "canTrashChildren"?: boolean }, "colorRgb"?: string, "createdTime"?: string, "hidden"?: boolean, "restrictions"?: { "adminManagedRestrictions"?: boolean, "copyRequiresWriterPermission"?: boolean, "domainUsersOnly"?: boolean, "driveMembersOnly"?: boolean } } | { "useDomainAdminAccess"?: boolean } | { "q"?: string, "useDomainAdminAccess"?: boolean } | { "colorRgb"?: string, "name"?: string, "restrictions"?: { "adminManagedRestrictions"?: boolean, "copyRequiresWriterPermission"?: boolean, "domainUsersOnly"?: boolean, "driveMembersOnly"?: boolean } } | { "appPropertiesUi"?: { "appPropertyValues": any }, "propertiesUi"?: { "propertyValues": any } };

    /**
     * Whether a query string should be used to filter results
     */
    readonly useQueryString?: boolean;

    /**
     * Query to use to return only specific files
     */
    readonly queryString?: string;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Filters to use to return only specific files
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly queryFilters?: { "name": any, "mimeType": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly permissionsUi?: { "permissionsValues": any };

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file to upload
     */
    readonly fileContent?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "fileName"?: string, "keepRevisionForever"?: boolean, "trashed"?: boolean, "ocrLanguage"?: string, "parentId"?: string, "useContentAsIndexableText"?: boolean };

    /**
     * The name the file should be saved as
     */
    readonly name?: string;

    /**
     * By default the response only contain the ID of the file. If this option gets activated, it will resolve the data automatically.
     */
    readonly resolveData?: boolean;

    /**
     * The IDs of the parent folders which contain the file
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly parents?: string;

    /**
     * The ID of the drive
     * Default: {"mode":"list","value":""}
     */
    readonly driveId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

}
