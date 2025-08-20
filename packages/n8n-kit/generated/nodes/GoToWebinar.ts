// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/GoToWebinar/GoToWebinar.node.ts' node

export const name = "goToWebinar" as const;
export const description = "Consume the GoToWebinar API" as const;
export const version = 1 as const;
export const defaults = {"name":"GoToWebinar"} as const;
export const credentials = [{"name":"goToWebinarOAuth2Api","required":true}] as const

/**
 * Consume the GoToWebinar API
 */
export interface GoToWebinarNodeParameters {

    /**
     * Default: "attendee"
     */
    readonly resource?: "attendee" | "coorganizer" | "panelist" | "registrant" | "session" | "webinar";


}

