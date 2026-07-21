// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/v2/MicrosoftSharePointV2.node.ts' node

export const description = "Interact with Microsoft SharePoint API" as const;
export const type = "n8n-nodes-base.microsoftSharePoint" as const;
export const version = 2 as const;
export const credentials = [{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftSharePointV2NodeParameters {
    /** Default: "microsoftOAuth2Api" */
    readonly authentication?: "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

}
