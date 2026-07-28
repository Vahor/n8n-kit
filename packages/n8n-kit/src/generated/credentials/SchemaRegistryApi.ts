// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SchemaRegistryApi.credentials.ts' credentials

export const name = "schemaRegistryApi" as const;

/**
 * displayName: Schema Registry
 * documentationUrl: schemaregistry
 */
export interface SchemaRegistryApiCredentials {
    /** URL of the schema registry */
    readonly "url": string;

    /** Default: "basicAuth" */
    readonly "authentication"?: "basicAuth" | "none";

    /** Username or Confluent Cloud API key */
    readonly "username": string;

    /**
     * Password or Confluent Cloud API secret
     * Type options: {"password":true}
     */
    readonly "password": string;

    readonly __name: "schemaRegistryApi";
}
