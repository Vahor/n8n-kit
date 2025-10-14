// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CrateDb.credentials.ts' credentials

export const name = "crateDb" as const;

/**
 * displayName: CrateDB
 * documentationUrl: cratedb
 */
export interface CrateDbCredentials {
    /** Default: "localhost" */
    readonly "host"?: string;

    /** Default: "doc" */
    readonly "database"?: string;

    /** Default: "crate" */
    readonly "user"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /** Default: "disable" */
    readonly "ssl"?: "allow" | "disable" | "require";

    /** Default: 5432 */
    readonly "port"?: number;

    readonly __name: "crateDb";
}
