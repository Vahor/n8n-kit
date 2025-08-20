// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/GraphSecurity/MicrosoftGraphSecurity.node.ts' node

export const name = "microsoftGraphSecurity" as const;
export const description = "Consume the Microsoft Graph Security API" as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft Graph Security"} as const;
export const credentials = [{"name":"microsoftGraphSecurityOAuth2Api","required":true}] as const

/**
 * Consume the Microsoft Graph Security API
 */
export interface MicrosoftGraphSecurityNodeParameters {

    /**
     * Default: "secureScore"
     */
    readonly resource?: "secureScore" | "secureScoreControlProfile";


}

