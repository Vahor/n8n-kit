// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pipedrive/PipedriveTrigger.node.ts' node

export const description = "Starts the workflow when Pipedrive events occur" as const;
export const type = "n8n-nodes-base.pipedriveTrigger" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"pipedriveApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"pipedriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["basicAuth"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

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
    readonly action?: "added" | "*" | "deleted" | "merged" | "updated" | "*" | "create" | "delete" | "change";

    /**
     * Type of object to receive notifications about
     * Default: "*"
     */
    readonly entity?: "activity" | "activityType" | "*" | "deal" | "note" | "organization" | "person" | "pipeline" | "product" | "stage" | "user";

    /**
     * Type of object to receive notifications about
     * Default: "*"
     */
    readonly object?: "activity" | "activityType" | "*" | "deal" | "note" | "organization" | "person" | "pipeline" | "product" | "stage" | "user";

}
