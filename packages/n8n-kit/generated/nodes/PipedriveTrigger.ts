// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Pipedrive/PipedriveTrigger.node.ts' node

export const name = "pipedriveTrigger" as const;
export const description = "Starts the workflow when Pipedrive events occur" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Pipedrive Trigger"} as const;
export const credentials = [{"name":"pipedriveApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"pipedriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["basicAuth"]}}}] as const

/**
 * Starts the workflow when Pipedrive events occur
 */
export interface PipedriveTriggerNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * If authentication should be activated for the webhook (makes it more secure)
     * Default: "none"
     */
    readonly incomingAuthentication?: "basicAuth" | "none";

    /**
     * Type of action to receive notifications about
     * Default: "*"
     */
    readonly action?: "added" | "*" | "deleted" | "merged" | "updated" | "create" | "delete" | "change";

    /**
     * Type of object to receive notifications about
     * Default: "*"
     */
    readonly entity?: string;

    /**
     * Type of object to receive notifications about
     * Default: "*"
     */
    readonly object?: string;


}

