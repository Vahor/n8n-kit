// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/EditImage/EditImage.node.ts' node

export const name = "editImage" as const;
export const description = "Edits an image like blur, resize or adding border and text" as const;
export const version = 1 as const;
export const defaults = {"name":"Edit Image","color":"#553399"} as const;

/**
 * Edits an image like blur, resize or adding border and text
 */
export interface EditImageNodeParameters {

    /**
     * Default: "border"
     */
    readonly operation?: string;

    /**
     * Name of the binary property in which the image data can be found
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * The operations to perform
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly operations?: { "operations": any };

    /**
     * Default: {}
     */
    readonly options?: { "fileName"?: string, "font"?: string, "format"?: "bmp" | "gif" | "jpeg" | "png" | "tiff" | "webp", "quality"?: number };


}

