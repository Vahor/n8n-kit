// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ElasticSecurityApi.credentials.ts' credentials

export const name = "elasticSecurityApi" as const;

/**
 * displayName: Elastic Security API
 * documentationUrl: elasticSecurity
 */
export interface ElasticSecurityApiCredentials {
    /**
     * Referred to as Kibana 'endpoint' in the Elastic deployment dashboard
     */
    readonly "baseUrl": string;

    /**
     * Default: "basicAuth"
     */
    readonly "type"?: "apiKey" | "basicAuth";

    readonly "username": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    readonly __name: "elasticSecurityApi";
}
