// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Facebook/FacebookTrigger.node.ts' node

export const description = "Starts the workflow when Facebook events occur" as const;
export const type = "n8n-nodes-base.facebookTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"facebookGraphAppApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface FacebookTriggerNodeParameters {
    /** Facebook APP ID */
    readonly appId?: string;

    /**
     * The object to subscribe to
     * Default: "user"
     */
    readonly object?: "adAccount" | "application" | "certificateTransparency" | "group" | "instagram" | "link" | "page" | "permissions" | "user" | "whatsappBusinessAccount" | "workplaceSecurity";

    /**
     * The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getObjectFields","loadOptionsDependsOn":["object"]}
     */
    readonly fields?: any[];

    /** Default: {} */
    readonly options?: { "includeValues"?: boolean };

}
