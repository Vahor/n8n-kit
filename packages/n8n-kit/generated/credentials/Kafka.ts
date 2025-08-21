// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Kafka.credentials.ts' credentials

export const name = "kafka" as const;

/**
 * displayName: Kafka
 * documentationUrl: kafka
 */
export interface KafkaNodeParameters {

    /**
     */
    readonly clientId?: string;

    /**
     */
    readonly brokers?: string;

    /**
     * Default: true
     */
    readonly ssl?: boolean;

    /**
     */
    readonly authentication?: boolean;

    /**
     * Optional username if authenticated is required
     */
    readonly username?: string;

    /**
     * Optional password if authenticated is required
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Default: "plain"
     */
    readonly saslMechanism?: "plain" | "scram-sha-256" | "scram-sha-512";


}

