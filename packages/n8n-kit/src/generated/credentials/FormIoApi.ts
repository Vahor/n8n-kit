// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FormIoApi.credentials.ts' credentials

export const name = "formIoApi" as const;

/**
 * displayName: Form.io API
 * documentationUrl: formIoTrigger
 */
export interface FormIoApiCredentials {

    /**
     * Default: "cloudHosted"
     */
    readonly "environment"?: "cloudHosted" | "selfHosted";

    /**
     */
    readonly "domain"?: string;

    /**
     */
    readonly "email"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "formIoApi";

}
