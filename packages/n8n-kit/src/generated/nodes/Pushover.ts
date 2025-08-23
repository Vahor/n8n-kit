// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pushover/Pushover.node.ts' node

export const description = "Consume Pushover API" as const;
export const type = "n8n-nodes-base.pushover" as const;
export const version = 1 as const;
export const credentials = [{"name":"pushoverApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PushoverNodeParameters {
    /**
     * Default: "message"
     */
    readonly resource?: "message";

    /**
     * Default: "push"
     */
    readonly operation?: "push";

    /**
     * The user/group key (not e-mail address) of your user (or you), viewable when logged into the <a href="https://pushover.net/">dashboard</a> (often referred to as <code>USER_KEY</code> in the <a href="https://support.pushover.net/i44-example-code-and-pushover-libraries">libraries</a> and code examples)
     */
    readonly userKey?: string;

    /**
     * Your message
     */
    readonly message?: string;

    /**
     * Send as -2 to generate no notification/alert, -1 to always send as a quiet notification, 1 to display as high-priority and bypass the user's quiet hours, or 2 to also require confirmation from the user
     * Default: -2
     */
    readonly priority?: "-2" | "-1" | "0" | "1" | "2";

    /**
     * Specifies how often (in seconds) the Pushover servers will send the same notification to the user. This parameter must have a value of at least 30 seconds between retries.
     * Default: 30
     * Type options: {"minValue":0}
     */
    readonly retry?: number;

    /**
     * Specifies how many seconds your notification will continue to be retried for (every retry seconds)
     * Default: 30
     * Type options: {"minValue":0,"maxValue":10800}
     */
    readonly expire?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "attachmentsUi"?: { "attachmentsValues": any }, "device"?: string, "html"?: boolean, "sound"?: string, "timestamp"?: string, "title"?: string, "url"?: string, "url_title"?: string };

}
