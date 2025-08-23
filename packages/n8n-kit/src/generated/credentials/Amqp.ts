// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Amqp.credentials.ts' credentials

export const name = "amqp" as const;

/**
 * displayName: AMQP
 * documentationUrl: amqp
 */
export interface AmqpCredentials {
    readonly "hostname"?: string;

    /**
     * Default: 5672
     */
    readonly "port"?: number;

    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly "transportType"?: string;

    readonly __name: "amqp";
}
