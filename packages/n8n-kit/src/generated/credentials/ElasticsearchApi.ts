// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ElasticsearchApi.credentials.ts' credentials

export const name = "elasticsearchApi" as const;

/**
 * displayName: Elasticsearch API
 * documentationUrl: elasticsearch
 */
export interface ElasticsearchApiCredentials {

    /**
     */
    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Referred to as Elasticsearch 'endpoint' in the Elastic deployment dashboard
     */
    readonly "baseUrl"?: string;

    /**
     */
    readonly "ignoreSSLIssues"?: boolean;

    readonly __name: "elasticsearchApi";

}
