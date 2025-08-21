// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Snowflake.credentials.ts' credentials

export const name = "snowflake" as const;

/**
 * displayName: Snowflake
 * documentationUrl: snowflake
 */
export interface SnowflakeNodeParameters {

    /**
     * Enter the name of your Snowflake account
     */
    readonly account?: string;

    /**
     * Specify the database you want to use after creating the connection
     */
    readonly database?: string;

    /**
     * The default virtual warehouse to use for the session after connecting. Used for performing queries, loading data, etc.
     */
    readonly warehouse?: string;

    /**
     * The way to authenticate with Snowflake
     * Default: "password"
     */
    readonly authentication?: "password" | "keyPair";

    /**
     */
    readonly username?: string;

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Private PEM key for Key-pair authentication with Snowflake, follow guide <a href="https://docs.snowflake.com/en/user-guide/key-pair-auth" target="_blank">here</a>
     * Type options: {"password":true,"rows":4}
     */
    readonly privateKey: string;

    /**
     * If the private key is encrypted, you must provide the passphrase used to encrypt it
     * Type options: {"password":true}
     */
    readonly passphrase?: string;

    /**
     * Enter the schema you want to use after creating the connection
     */
    readonly schema?: string;

    /**
     * Enter the security role you want to use after creating the connection
     */
    readonly role?: string;

    /**
     * Whether to keep alive the client session. By default, client connections typically time out approximately 3-4 hours after the most recent query was executed. If the parameter clientSessionKeepAlive is set to true, the client’s connection to the server will be kept alive indefinitely, even if no queries are executed.
     */
    readonly clientSessionKeepAlive?: boolean;


}

