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

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "delete" | "update" | "create";

    /**
     * The slug of the organization the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getOrganizations"}
     */
    readonly organizationSlug?: string;

    /**
     * The slug of the project the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects","loadOptionsDependsOn":["organizationSlug"]}
     */
    readonly projectSlug?: string;

    /**
     * Whether the event payload will include the full event body, including the stack trace
     * Default: true
     */
    readonly full?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * The ID of the event to retrieve (either the numeric primary-key or the hexadecimal ID as reported by the raven client)
     */
    readonly eventId?: string;

    /**
     * ID of issue to get
     */
    readonly issueId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "query"?: string, "statsPeriod"?: "14d" | "24h", "shortIdLookUp"?: boolean, "assignedTo"?: string, "hasSeen"?: boolean, "isBookmarked"?: boolean, "isPublic"?: boolean, "isSubscribed"?: boolean, "status"?: "ignored" | "resolved" | "resolvedInNextRelease" | "unresolved", "member"?: boolean, "owner"?: boolean, "slug"?: string, "dateReleased"?: any, "commits"?: { "commitProperties": any }, "refs"?: { "refProperties": any } };

    /**
     * The slug of the organization the team should be created for
     */
    readonly name?: string;

    /**
     * Whether you agree to the applicable terms of service and privacy policy of Sentry.io
     */
    readonly agreeTerms?: boolean;

    /**
     * The slug of the organization to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getOrganizations"}
     */
    readonly organization_slug?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "name"?: string, "slug"?: string, "isBookmarked"?: boolean, "digestsMaxDelay"?: number, "digestsMinDelay"?: number, "team"?: string, "platform"?: string, "commits"?: { "commitProperties": any }, "dateReleased"?: any, "ref"?: string, "refs"?: { "refProperties": any }, "url"?: string };

    /**
     * The slug of the team to create a new project for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTeams","loadOptionsDependsOn":["organizationSlug"]}
     */
    readonly teamSlug?: string;

    /**
     * The version identifier of the release
     */
    readonly version?: string;

    /**
     * A URL that points to the release. This can be the path to an online interface to the sourcecode for instance.
     */
    readonly url?: string;

    /**
     * A list of project slugs that are involved in this release. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projects?: string[];


}

