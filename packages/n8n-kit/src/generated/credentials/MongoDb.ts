// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MongoDb.credentials.ts' credentials

export const name = "mongoDb" as const;

/**
 * displayName: MongoDB
 * documentationUrl: mongoDb
 */
export interface MongoDbCredentials {
    /**
     * Default: "values"
     */
    readonly "configurationType"?: "connectionString" | "values";

    /**
     * If provided, the value here will be used as a MongoDB connection string, and the MongoDB credentials will be ignored
     */
    readonly "connectionString"?: string;

    /**
     * Default: "localhost"
     */
    readonly "host"?: string;

    /**
     * Note: the database should still be provided even if using an override connection string
     */
    readonly "database"?: string;

    readonly "user"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Default: 27017
     */
    readonly "port"?: number;

    readonly "tls"?: boolean;

    /**
     * Type options: {"password":true}
     */
    readonly "ca"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "cert"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "key"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "passphrase"?: string;

    readonly __name: "mongoDb";
}
