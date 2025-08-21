// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/RabbitMQ.credentials.ts' credentials

export const name = "rabbitmq" as const;

/**
 * displayName: RabbitMQ
 * documentationUrl: rabbitmq
 */
export interface RabbitMQNodeParameters {

    /**
     */
    readonly hostname?: string;

    /**
     * Default: 5672
     */
    readonly port?: number;

    /**
     */
    readonly username?: string;

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Default: "/"
     */
    readonly vhost?: string;

    /**
     */
    readonly ssl?: boolean;

    /**
     * Whether to use passwordless connection with certificates (SASL mechanism EXTERNAL)
     * Default: true
     */
    readonly passwordless?: boolean;

    /**
     * SSL CA Certificates to use
     * Type options: {"password":true}
     */
    readonly ca?: string;

    /**
     * SSL Client Certificate to use
     * Type options: {"password":true}
     */
    readonly cert?: string;

    /**
     * SSL Client Key to use
     * Type options: {"password":true}
     */
    readonly key?: string;

    /**
     * SSL passphrase to use
     * Type options: {"password":true}
     */
    readonly passphrase?: string;


}

