// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/GraphSecurity/MicrosoftGraphSecurity.node.ts' node

export const description = "Consume the Microsoft Graph Security API" as const;
export const type = "n8n-nodes-base.microsoftGraphSecurity" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftGraphSecurityOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftGraphSecurityNodeParameters {
    /** Default: "secureScore" */
    readonly resource?: "secureScore" | "secureScoreControlProfile";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "get" | "getAll" | "update";

    /** ID of the secure score to retrieve */
    readonly secureScoreId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { filter?: string, includeControlScores?: boolean } | { filter?: string };

    /** ID of the secure score control profile to retrieve */
    readonly secureScoreControlProfileId?: string;

    /** Name of the provider of the security product or service */
    readonly provider?: string;

    /** Name of the vendor of the security product or service */
    readonly vendor?: string;

    /** Default: {} */
    readonly updateFields?: { state?: "Default" | "Ignored" | "ThirdParty" };

}
