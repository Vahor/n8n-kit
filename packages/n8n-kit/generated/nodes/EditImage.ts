// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/EditImage/EditImage.node.js' node

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
    readonly operation?: "blur" | "border" | "composite" | "create" | "crop" | "draw" | "information" | "multiStep" | "resize" | "rotate" | "shear" | "text" | "transparent";

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
     * The background color of the image to create
     * Default: "#ffffff00"
     * Type options: {"showAlpha":true}
     */
    readonly backgroundColor?: any;

    /**
     * The width of the image to create
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly width?: number;

    /**
     * The height of the image to create
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly height?: number;

    /**
     * The primitive to draw
     * Default: "rectangle"
     */
    readonly primitive?: "circle" | "line" | "rectangle";

    /**
     * The color of the primitive to draw
     * Default: "#ff000000"
     * Type options: {"showAlpha":true}
     */
    readonly color?: any;

    /**
     * X (horizontal) start position of the primitive
     * Default: 50
     */
    readonly startPositionX?: number;

    /**
     * Y (horizontal) start position of the primitive
     * Default: 50
     */
    readonly startPositionY?: number;

    /**
     * X (horizontal) end position of the primitive
     * Default: 250
     */
    readonly endPositionX?: number;

    /**
     * Y (horizontal) end position of the primitive
     * Default: 250
     */
    readonly endPositionY?: number;

    /**
     * The radius of the corner to create round corners
     */
    readonly cornerRadius?: number;

    /**
     * Text to write on the image
     * Type options: {"rows":5}
     */
    readonly text?: string;

    /**
     * Size of the text
     * Default: 18
     */
    readonly fontSize?: number;

    /**
     * Color of the text
     * Default: "#000000"
     */
    readonly fontColor?: any;

    /**
     * X (horizontal) position of the text
     * Default: 50
     */
    readonly positionX?: number;

    /**
     * Y (vertical) position of the text
     * Default: 50
     */
    readonly positionY?: number;

    /**
     * Max amount of characters in a line before a line-break should get added
     * Default: 80
     * Type options: {"minValue":1}
     */
    readonly lineLength?: number;

    /**
     * How strong the blur should be
     * Default: 5
     * Type options: {"minValue":0,"maxValue":1000}
     */
    readonly blur?: number;

    /**
     * The sigma of the blur
     * Default: 2
     * Type options: {"minValue":0,"maxValue":1000}
     */
    readonly sigma?: number;

    /**
     * The width of the border
     * Default: 10
     */
    readonly borderWidth?: number;

    /**
     * The height of the border
     * Default: 10
     */
    readonly borderHeight?: number;

    /**
     * Color of the border
     * Default: "#000000"
     */
    readonly borderColor?: any;

    /**
     * The name of the binary property which contains the data of the image to composite on top of image which is found in Property Name
     */
    readonly dataPropertyNameComposite?: string;

    /**
     * The operator to use to combine the images
     * Default: "Over"
     */
    readonly operator?: "Add" | "Atop" | "Bumpmap" | "Copy" | "CopyBlack" | "CopyBlue" | "CopyCyan" | "CopyGreen" | "CopyMagenta" | "CopyOpacity" | "CopyRed" | "CopyYellow" | "Difference" | "Divide" | "In" | "Minus" | "Multiply" | "Out" | "Over" | "Plus" | "Subtract" | "Xor";

    /**
     * How to resize the image
     * Default: "maximumArea"
     */
    readonly resizeOption?: "ignoreAspectRatio" | "maximumArea" | "minimumArea" | "onlyIfLarger" | "onlyIfSmaller" | "percent";

    /**
     * How much the image should be rotated
     * Type options: {"minValue":-360,"maxValue":360}
     */
    readonly rotate?: number;

    /**
     * X (horizontal) shear degrees
     */
    readonly degreesX?: number;

    /**
     * Y (vertical) shear degrees
     */
    readonly degreesY?: number;

    /**
     * Default: {}
     */
    readonly options?: { "fileName"?: string, "font"?: string, "format"?: "bmp" | "gif" | "jpeg" | "png" | "tiff" | "webp", "quality"?: number };


}

