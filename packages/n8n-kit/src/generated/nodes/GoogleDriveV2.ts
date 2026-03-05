// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Drive/v2/GoogleDriveV2.node.ts' node

export const description = "Access data on Google Drive" as const;
export const type = "n8n-nodes-base.googleDrive" as const;
export const version = 3 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleDriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleDriveV2NodeParameters {
    /** Default: "oAuth2" */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /** Default: "file" */
    readonly resource?: "file" | "fileFolder" | "folder" | "drive";

    /** Default: "create" */
    readonly operation?: "create" | "deleteDrive" | "get" | "list" | "update" | "copy" | "createFromText" | "deleteFile" | "download" | "move" | "share" | "update" | "upload" | "search" | "create" | "deleteFolder" | "share";

    /** The name of the shared drive to create */
    readonly name?: string;

    /** Default: {} */
    readonly options?: { capabilities?: { canAddChildren?: boolean, canChangeCopyRequiresWriterPermissionRestriction?: boolean, canChangeDomainUsersOnlyRestriction?: boolean, canChangeDriveBackground?: boolean, canChangeDriveMembersOnlyRestriction?: boolean, canComment?: boolean, canCopy?: boolean, canDeleteChildren?: boolean, canDeleteDrive?: boolean, canDownload?: boolean, canEdit?: boolean, canListChildren?: boolean, canManageMembers?: boolean, canReadRevisions?: boolean, canRename?: boolean, canRenameDrive?: boolean, canShare?: boolean, canTrashChildren?: boolean }, colorRgb?: string, hidden?: boolean, restrictions?: { adminManagedRestrictions?: boolean, copyRequiresWriterPermission?: boolean, domainUsersOnly?: boolean, driveMembersOnly?: boolean } } | { useDomainAdminAccess?: boolean } | { q?: string, useDomainAdminAccess?: boolean } | { colorRgb?: string, name?: string, restrictions?: { adminManagedRestrictions?: boolean, copyRequiresWriterPermission?: boolean, domainUsersOnly?: boolean, driveMembersOnly?: boolean } } | { copyRequiresWriterPermission?: boolean, description?: string } | { deletePermanently?: boolean } | { appPropertiesUi?: { appPropertyValues: Array<{ key?: string, value?: string }> }, propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, keepRevisionForever?: boolean, ocrLanguage?: string, useContentAsIndexableText?: boolean, convertToGoogleDocument?: boolean } | { binaryPropertyName?: string, googleFileConversion?: { conversion: { docsToFormat?: "text/html" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.oasis.opendocument.text" | "application/pdf" | "application/rtf" | "text/plain", drawingsToFormat?: "image/jpeg" | "application/pdf" | "image/png" | "image/svg+xml", slidesToFormat?: "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.oasis.opendocument.presentation" | "application/pdf", sheetsToFormat?: "text/csv" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/vnd.oasis.opendocument.spreadsheet" | "application/pdf" } }, fileName?: string } | { emailMessage?: string, moveToNewOwnersRoot?: boolean, sendNotificationEmail?: boolean, transferOwnership?: boolean, useDomainAdminAccess?: boolean } | { appPropertiesUi?: { appPropertyValues: Array<{ key?: string, value?: string }> }, propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, keepRevisionForever?: boolean, ocrLanguage?: string, useContentAsIndexableText?: boolean, trashed?: boolean, fields?: ("*" | "explicitlyTrashed" | "exportLinks" | "hasThumbnail" | "iconLink" | "id" | "kind" | "mimeType" | "name" | "permissions" | "shared" | "spaces" | "starred" | "thumbnailLink" | "trashed" | "version" | "webViewLink")[] } | { appPropertiesUi?: { appPropertyValues: Array<{ key?: string, value?: string }> }, propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, keepRevisionForever?: boolean, ocrLanguage?: string, useContentAsIndexableText?: boolean, simplifyOutput?: boolean } | { fields?: ("*" | "explicitlyTrashed" | "exportLinks" | "hasThumbnail" | "iconLink" | "id" | "kind" | "mimeType" | "name" | "permissions" | "shared" | "spaces" | "starred" | "thumbnailLink" | "trashed" | "version" | "webViewLink")[] } | { simplifyOutput?: boolean, folderColorRgb?: string };

    /**
     * The shared drive to delete
     * Default: {"mode":"list","value":""}
     */
    readonly driveId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number;

    /**
     * The file to copy
     * Default: {"mode":"list","value":""}
     */
    readonly fileId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Whether to copy the file in the same folder as the original file
     * Default: true
     */
    readonly sameFolder?: boolean;

    /**
     * The folder where to save the copied file
     * Default: {"mode":"list","value":"root","cachedResultName":"/ (Root folder)"}
     */
    readonly folderId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * The text to create the file with
     * Type options: {"rows":2}
     */
    readonly content?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly permissionsUi?: { permissionsValues: { role?: "commenter" | "fileOrganizer" | "organizer" | "owner" | "reader" | "writer", type?: "user" | "group" | "domain" | "anyone", emailAddress?: string, domain?: string, allowFileDiscovery?: boolean } };

    /** Whether to send a new binary data to update the file */
    readonly changeFileContent?: boolean;

    /**
     * Find the name of input field containing the binary data to update the file in the Input panel on the left, in the Binary tab
     * Default: "data"
     */
    readonly inputDataFieldName?: string;

    /** If not specified, the file name will not be changed */
    readonly newUpdatedFileName?: string;

    /**
     * Whether to search for the file/folder name or use a query string
     * Default: "name"
     */
    readonly searchMethod?: "name" | "query";

    /** The name of the file or folder to search for. Returns also files and folders whose names partially match this search term. */
    readonly queryString?: string;

    /** Default: {} */
    readonly filter?: { driveId?: {
	value: string,
	mode: "list" | "url" | "id",
}, folderId?: {
	value: string,
	mode: "list" | "url" | "id",
}, whatToSearch?: "all" | "files" | "folders", fileTypes?: ("*" | "application/vnd.google-apps.drive-sdk" | "application/vnd.google-apps.audio" | "application/vnd.google-apps.folder" | "application/vnd.google-apps.script" | "application/vnd.google-apps.document" | "application/vnd.google-apps.drawing" | "application/vnd.google-apps.form" | "application/vnd.google-apps.fusiontable" | "application/vnd.google-apps.map" | "application/vnd.google-apps.spreadsheet" | "application/vnd.google-apps.sites" | "application/vnd.google-apps.presentation" | "application/vnd.google-apps.photo" | "application/vnd.google-apps.unknown" | "application/vnd.google-apps.video")[] | ("*" | "application/vnd.google-apps.drive-sdk" | "application/vnd.google-apps.audio" | "application/vnd.google-apps.script" | "application/vnd.google-apps.document" | "application/vnd.google-apps.drawing" | "application/vnd.google-apps.form" | "application/vnd.google-apps.fusiontable" | "application/vnd.google-apps.map" | "application/vnd.google-apps.spreadsheet" | "application/vnd.google-apps.sites" | "application/vnd.google-apps.presentation" | "application/vnd.google-apps.photo" | "application/vnd.google-apps.unknown" | "application/vnd.google-apps.video")[], includeTrashed?: boolean };

    /**
     * The folder to delete
     * Default: {"mode":"list","value":""}
     */
    readonly folderNoRootId?: {
	value: string,
	mode: "list" | "url" | "id",
};

}
