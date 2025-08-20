// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Line/Line.node.js' node

export const name = "line" as const;
export const description = "Consume Line API" as const;
export const version = 1 as const;
export const defaults = {"name":"Line"} as const;
export const credentials = [{"name":"lineNotifyOAuth2Api","required":true,"displayOptions":{"show":{"resource":["notification"]}}}] as const

/**
 * Consume Line API
 */
export interface LineNodeParameters {

    /**
     * Default: "notification"
     */
    readonly resource?: "notification";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    /**
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "imageUi"?: { "imageValue": any }, "notificationDisabled"?: boolean, "stickerUi"?: { "stickerValue": any } };


}

