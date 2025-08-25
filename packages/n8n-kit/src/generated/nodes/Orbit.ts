// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Orbit/Orbit.node.ts' node

export const description = "Consume Orbit API" as const;
export const type = "n8n-nodes-base.orbit" as const;
export const version = 1 as const;
export const credentials = [{"name":"orbitApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OrbitNodeParameters {
    /** Default: "member" */
    readonly resource?: "activity" | "member" | "note" | "post";

    /** Default: "create" */
    readonly operation?: "create" | "getAll" | "upsert" | "delete" | "get" | "getAll" | "lookup" | "update" | "create" | "getAll" | "update" | "create" | "getAll" | "delete";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "Deprecated"
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspaceId?: string;

    readonly memberId?: string;

    readonly title?: string;

    /** Default: {} */
    readonly additionalFields?: { activityType?: string, description?: string, key?: string, link?: string, linkText?: string, occurredAt?: string } | { bio?: string, birthday?: string, company?: string, location?: string, name?: string, pronouns?: string, shippingAddress?: string, slug?: string, tagsToAdd?: string, tagList?: string, tShirt?: string, teammate?: boolean, url?: string } | { publishedAt?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { memberId?: string };

    /** By default, the response just includes the reference of the identity. When set to true the identities will be resolved automatically. */
    readonly resolveIdentities?: boolean;

    /** Default: {} */
    readonly options?: { sort?: string, direction?: "ASC" | "DESC" };

    /** Set to github, twitter, email, discourse or the source of any identities you've manually created */
    readonly source?: "discourse" | "email" | "github" | "twitter";

    readonly searchBy?: "username" | "id";

    /** The username at the source */
    readonly id?: string;

    /** The username at the source */
    readonly username?: string;

    /** The email address */
    readonly email?: string;

    readonly host?: string;

    /** Default: {} */
    readonly updateFields?: { bio?: string, birthday?: string, company?: string, location?: string, name?: string, pronouns?: string, shippingAddress?: string, slug?: string, tagsToAdd?: string, tagList?: string, tShirt?: string, teammate?: boolean, url?: string };

    /**
     * The identity is used to find the member. If no member exists, a new member will be created and linked to the provided identity.
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly identityUi?: { identityValue: { source?: "discourse" | "email" | "github" | "twitter", searchBy: "username" | "id", id: string, username: string, email: string, host: string } };

    readonly note?: string;

    readonly resolveMember?: boolean;

    readonly noteId?: string;

    /** Supply any URL and Orbit will do its best job to parse out a title, description, and image */
    readonly url?: string;

    readonly postId?: string;

}
