// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Kafka.credentials.ts' credentials

export const name = "kafka" as const;

/**
 * displayName: Kafka
 * documentationUrl: kafka
 */
export interface KafkaCredentials {
    readonly "clientId"?: string;

    readonly "brokers"?: string;

    /** Default: true */
    readonly "ssl"?: boolean;

    /**
     * PEM-encoded CA certificate(s) used to verify the broker. Leave empty to use the system CAs.
     * Type options: {"password":true}
     */
    readonly "ca"?: string;

    /**
     * PEM-encoded client certificate for mutual TLS (mTLS). Provide together with the client private key.
     * Type options: {"password":true}
     */
    readonly "cert"?: string;

    /**
     * PEM-encoded client private key for mutual TLS (mTLS). Provide together with the client certificate.
     * Type options: {"password":true}
     */
    readonly "key"?: string;

    /** Whether to connect even when SSL certificate validation fails (e.g. a self-signed or hostname-mismatched broker certificate) */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly "authentication"?: boolean;

    /** Optional username if authenticated is required */
    readonly "username"?: string;

    /**
     * Optional password if authenticated is required
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /** Default: "plain" */
    readonly "saslMechanism"?: "plain" | "scram-sha-256" | "scram-sha-512";

    readonly __name: "kafka";
}
