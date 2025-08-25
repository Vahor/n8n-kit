// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pushcut/Pushcut.node.ts' node

export const description = "Consume Pushcut API" as const;
export const type = "n8n-nodes-base.pushcut" as const;
export const version = 1 as const;
export const credentials = [{"name":"pushcutApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PushcutNodeParameters {
    /** Default: "notification" */
    readonly resource?: "notification";

    /** Default: "send" */
    readonly operation?: "send";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getNotifications"}
     */
    readonly notificationName?: string;

    /** Default: {} */
    readonly additionalFields?: { devices?: any[], input?: string, text?: string, title?: string };

}
