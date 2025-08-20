// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SentryIo/SentryIo.node.ts' node

export const name = "sentryIo" as const;
export const description = "Consume Sentry.io API" as const;
export const version = 1 as const;
export const defaults = {"name":"Sentry.io"} as const;
export const credentials = [{"name":"sentryIoOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"],"sentryVersion":["cloud"]}}},{"name":"sentryIoApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"],"sentryVersion":["cloud"]}}},{"name":"sentryIoServerApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"],"sentryVersion":["server"]}}}] as const

/**
 * Consume Sentry.io API
 */
export interface SentryIoNodeParameters {

    /**
     * Default: "cloud"
     */
    readonly sentryVersion?: "cloud" | "server";

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "event"
     */
    readonly resource?: "event" | "issue" | "organization" | "project" | "release" | "team";


}

