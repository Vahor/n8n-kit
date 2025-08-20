// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Wait/Wait.node.ts' node

export const name = "wait" as const;
export const description = "Wait before continue with execution" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Wait","color":"#804050"} as const;
export const credentials = "credentialsProperty(this.authPropertyName)" as const

/**
 * Wait before continue with execution
 */
export interface WaitNodeParameters {

    /**
     * Determines the waiting mode to use before the workflow continues
     * Default: "timeInterval"
     */
    readonly resume?: "timeInterval" | "specificTime" | "webhook" | "form";

    /**
     * If and how incoming resume-webhook-requests to $execution.resumeFormUrl should be authenticated for additional security
     * Default: "none"
     */
    readonly incomingAuthentication?: "basicAuth" | "none";

    /**
     * The date and time to wait for before continuing
     */
    readonly dateTime?: any;

    /**
     */
    readonly webhookNotice?: string;

    /**
     */
    readonly formNotice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "undefined"?: any, "undefined"?: any, "undefined"?: any };


}

