// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePointTrigger.node.ts' node

export const description = "Starts a workflow when a file or list item changes in Microsoft SharePoint" as const;
export const type = "n8n-nodes-base.microsoftSharePointTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftSharePointTriggerNodeParameters {
    /** Default: "microsoftOAuth2Api" */
    readonly authentication?: "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
