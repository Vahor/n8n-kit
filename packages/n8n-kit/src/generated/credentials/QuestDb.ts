// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/QuestDb.credentials.ts' credentials

export const name = "questDb" as const;

/**
 * displayName: QuestDB
 * documentationUrl: questDb
 */
export interface QuestDbCredentials {
    /**
     * Default: "localhost"
     */
    readonly "host"?: string;

    /**
     * Default: "qdb"
     */
    readonly "database"?: string;

    /**
     * Default: "admin"
     */
    readonly "user"?: string;

    /**
     * Default: "quest"
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Default: "disable"
     */
    readonly "ssl"?: "allow" | "disable" | "require";

    /**
     * Default: 8812
     */
    readonly "port"?: number;

    readonly __name: "questDb";
}
