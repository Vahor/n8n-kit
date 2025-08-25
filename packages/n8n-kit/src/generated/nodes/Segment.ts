// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Segment/Segment.node.ts' node

export const description = "Consume Segment API" as const;
export const type = "n8n-nodes-base.segment" as const;
export const version = 1 as const;
export const credentials = [{"name":"segmentApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SegmentNodeParameters {
    /** Default: "identify" */
    readonly resource?: "group" | "identify" | "track";

    /** Default: "add" */
    readonly operation?: "add" | "create" | "event" | "page";

    readonly userId?: string;

    /** A Group ID is the unique identifier which you recognize a group by in your own database */
    readonly groupId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly traits?: { traitsUi: Array<{ key?: string, value?: string }> };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly context?: { contextUi: { active?: boolean, ip?: string, locate?: string, page?: string, timezone?: string, app?: { appUi: { name?: string, version?: string, build?: string } }, campaign?: { campaignUi: { name?: string, source?: string, medium?: string, term?: string, content?: string } }, device?: { deviceUi: { id?: string, manufacturer?: string, model?: string, name?: string, type?: string, version?: string } } } };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly integrations?: { integrationsUi: { all?: boolean, salesforce?: boolean } };

    /** Name of the action that a user has performed */
    readonly event?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly properties?: { propertiesUi: Array<{ key?: string, value?: string }> };

    /** Name of the page For example, most sites have a “Signup” page that can be useful to tag, so you can see users as they move through your funnel */
    readonly name?: string;

}
