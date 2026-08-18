// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HttpTemplatedCustomAuth.credentials.ts' credentials

export const name = "httpTemplatedCustomAuth" as const;

/**
 * displayName: Simplified Custom Auth
 * documentationUrl: undefined
 */
export interface HttpTemplatedCustomAuthCredentials {
    /** The authentication parts (headers, body, qs) added to every request this credential signs. {{placeholder}} markers are replaced with the matching entry from Placeholder Values. Must not contain secrets — those belong in the placeholder values. */
    readonly "template": string;

    /** Describes the input shown for each {{placeholder}}: name, user-facing title, help text, and type ("password" masks the input, "plain" does not) */
    readonly "placeholderDefs"?: string;

    /**
     * The secret value that replaces each {{placeholder}} of the template when a request is sent, by placeholder name. Values are redacted after saving.
     * Type options: {"redactJsonLeaves":true,"resolveCredentialJsonLeaves":true}
     */
    readonly "placeholderValues"?: string;

    /** Side-effect-free GET endpoint the credential is verified against (e.g. an account or profile endpoint). Must never trigger billable work. */
    readonly "testUrl"?: string;

    /** Provider page where the user creates/copies the secret (e.g. the API-keys dashboard). The AI Assistant help thread points the user there. */
    readonly "docsUrl"?: string;

    /** Host of the API this credential authenticates against (e.g. api.pexels.com). Setup surfaces only offer this credential to nodes calling the same host (subdomains match). Set from the recipe when the credential is created; when empty, the credential is never offered automatically. */
    readonly "serviceHost"?: string;

    /** Status codes the credential test must not treat as an auth rejection, as a JSON array — e.g. [401] for services that answer 401 to a valid GET. Only 401 and 403 can ever count as rejection, so other codes are ignored. */
    readonly "acceptedStatusCodes"?: string;

    readonly __name: "httpTemplatedCustomAuth";
}
