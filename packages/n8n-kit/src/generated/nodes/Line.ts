// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Line/Line.node.ts' node

export const description = "Consume Line API" as const;
export const type = "n8n-nodes-base.line" as const;
export const version = 1 as const;
export const credentials = [{"name":"lineNotifyOAuth2Api","required":true,"displayOptions":{"show":{"resource":["notification"]}}}] as const;

/**
 * Consume Line API
 */
export interface LineNodeParameters {

    readonly notice?: string;

    /**
     * Default: "notification"
     */
    readonly resource?: "notification";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "imageUi"?: { "imageValue": any }, "notificationDisabled"?: boolean, "stickerUi"?: { "stickerValue": any } };


}

