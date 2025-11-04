// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FormIoApi.credentials.ts' credentials

export const name = "formIoApi" as const;

/**
 * displayName: Form.io API
 * documentationUrl: formiotrigger
 */
export interface FormIoApiCredentials {
    /** Default: "cloudHosted" */
    readonly "environment"?: "cloudHosted" | "selfHosted";

    readonly "domain"?: string;

    readonly "email"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /** Type options: {"expirable":true,"password":true} */
    readonly "token"?: unknown;

    readonly __name: "formIoApi";
}
