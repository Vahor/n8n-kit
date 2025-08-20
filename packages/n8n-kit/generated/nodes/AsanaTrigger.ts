// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Asana/AsanaTrigger.node.js' node

export const name = "asanaTrigger" as const;
export const description = "Starts the workflow when Asana events occur." as const;
export const version = 1 as const;
export const defaults = {"name":"Asana Trigger"} as const;
export const credentials = [{"name":"asanaApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"asanaOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Starts the workflow when Asana events occur.
 */
export interface AsanaTriggerNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * The resource ID to subscribe to. The resource can be a task or project.
     */
    readonly resource: string;

    /**
     * The workspace ID the resource is registered under. This is only required if you want to allow overriding existing webhooks. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspace?: string;


}

