// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Elastic/ElasticSecurity/ElasticSecurity.node.ts' node

export const name = "elasticSecurity" as const;
export const description = "Consume the Elastic Security API" as const;
export const version = 1 as const;
export const defaults = {"name":"Elastic Security"} as const;
export const credentials = [{"name":"elasticSecurityApi","required":true}] as const

/**
 * Consume the Elastic Security API
 */
export interface ElasticSecurityNodeParameters {

    /**
     * Default: "case"
     */
    readonly resource?: "case" | "caseComment" | "caseTag" | "connector";


}

