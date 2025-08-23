// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Segment/Segment.node.ts' node

export const description = "Consume Segment API" as const;
export const type = "n8n-nodes-base.segment" as const;
export const version = 1 as const;
export const credentials = [{"name":"segmentApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SegmentNodeParameters {
    /**
     * Default: "identify"
     */
    readonly resource?: "group" | "identify" | "track";

    /**
     * Default: "add"
     */
    readonly operation?: "add" | "create" | "event" | "page";

    readonly userId?: string;

    /**
     * A Group ID is the unique identifier which you recognize a group by in your own database
     */
    readonly groupId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly traits?: { "traitsUi": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly context?: { "contextUi": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly integrations?: { "integrationsUi": any };

    /**
     * Name of the action that a user has performed
     */
    readonly event?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly properties?: { "propertiesUi": any };

    /**
     * Name of the page For example, most sites have a “Signup” page that can be useful to tag, so you can see users as they move through your funnel
     */
    readonly name?: string;

}
