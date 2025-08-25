// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Drift/Drift.node.ts' node

export const description = "Consume Drift API" as const;
export const type = "n8n-nodes-base.drift" as const;
export const version = 1 as const;
export const credentials = [{"name":"driftApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"driftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DriftNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "contact" */
    readonly resource?: "contact";

    /** Default: "create" */
    readonly operation?: "create" | "getCustomAttributes" | "delete" | "get" | "update";

    /** The email of the contact */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { name?: string, phone?: string };

    /** Unique identifier for the contact */
    readonly contactId?: string;

    /** Default: {} */
    readonly updateFields?: { email?: string, name?: string, phone?: string };

}
