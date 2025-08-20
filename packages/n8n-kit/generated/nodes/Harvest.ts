// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Harvest/Harvest.node.ts' node

export const name = "harvest" as const;
export const description = "Access data on Harvest" as const;
export const version = 1 as const;
export const defaults = {"name":"Harvest"} as const;
export const credentials = [{"name":"harvestApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"harvestOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Access data on Harvest
 */
export interface HarvestNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "client" | "company" | "contact" | "estimate" | "expense" | "invoice" | "project" | "task" | "timeEntry" | "user";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAccounts"}
     */
    readonly accountId: string;


}

