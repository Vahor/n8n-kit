// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Box/Box.node.ts' node

export const name = "box" as const;
export const description = "Consume Box API" as const;
export const version = 1 as const;
export const credentials = [{"name":"boxOAuth2Api","required":true}] as const;

/**
 * Consume Box API
 */
export interface BoxNodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "file" | "folder";

    /**
     * Default: "upload"
     */
    readonly operation?: "copy" | "delete" | "download" | "get" | "search" | "share" | "upload" | "create" | "delete" | "get" | "search" | "share" | "update";

    /**
     */
    readonly fileId?: string;

    /**
     * The ID of folder to copy the file to. If not defined will be copied to the root folder.
     */
    readonly parentId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "fields"?: string, "name"?: string, "version"?: string } | { "fields"?: string } | { "contet_types"?: string, "createdRangeUi"?: { "createdRangeValuesUi": any }, "direction"?: "ASC" | "DESC", "fields"?: string, "file_extensions"?: string, "ancestor_folder_ids"?: string, "scope"?: "user_content" | "enterprise_content", "size_range"?: string, "sort"?: "relevance" | "modified_at", "trash_content"?: "non_trashed_only" | "trashed_only", "updatedRangeUi"?: { "updatedRangeValuesUi": any }, "owner_user_ids"?: string };

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types.
     */
    readonly query?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * The type of object the file will be shared with
     */
    readonly accessibleBy?: "group" | "user" | "user" | "group";

    /**
     * Whether identify the user by email or ID
     * Default: true
     */
    readonly useEmail?: boolean;

    /**
     * The user's email address to share the file with
     */
    readonly email?: string;

    /**
     * The user's ID to share the file with
     */
    readonly userId?: string;

    /**
     * The group's ID to share the file with
     */
    readonly groupId?: string;

    /**
     * The level of access granted
     * Default: "editor"
     */
    readonly role?: "coOwner" | "editor" | "previewer" | "previewerUploader" | "uploader" | "viewer" | "viewerUploader";

    /**
     * Default: {}
     */
    readonly options?: { "can_view_path"?: boolean, "expires_at"?: string, "fields"?: string, "notify"?: boolean } | { "access"?: "collaborators" | "open", "fields"?: string };

    /**
     * The name the file should be saved as
     */
    readonly fileName?: string;

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file
     */
    readonly fileContent?: string;

    /**
     * Folder's name
     */
    readonly name?: string;

    /**
     */
    readonly folderId?: string;

    /**
     * Whether to delete a folder that is not empty by recursively deleting the folder and all of its content
     */
    readonly recursive?: boolean;

    /**
     * Default: {}
     */
    readonly updateFields?: { "can_non_owners_invite"?: boolean, "can_non_owners_view_collaborators"?: boolean, "description"?: string, "fields"?: string, "is_collaboration_restricted_to_enterprise"?: boolean, "name"?: string, "parentId"?: string, "shared_link"?: { "access"?: "collaborators" | "company" | "open", "password"?: string, "permissions"?: { "can_download"?: boolean, "unshared_at"?: string, "vanity_name"?: string }, "tags"?: string } };


}

