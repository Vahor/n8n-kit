// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DatabricksApi.credentials.ts' credentials

export const name = "databricksApi" as const;

/**
 * displayName: Databricks
 * documentationUrl: https://docs.databricks.com/dev-tools/api/latest/authentication.html
 */
export interface DatabricksApiCredentials {
    /** Domain of your Databricks workspace */
    readonly "host": string;

    /**
     * Databricks personal access token
     * Type options: {"password":true}
     */
    readonly "token": string;

    readonly __name: "databricksApi";
}
