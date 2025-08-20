// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Emelia/Emelia.node.ts' node

export const name = "emelia" as const;
export const description = "Consume the Emelia API" as const;
export const version = 1 as const;
export const defaults = {"name":"Emelia"} as const;
export const credentials = [{"name":"emeliaApi","required":true,"testedBy":"emeliaApiTest"}] as const

/**
 * Consume the Emelia API
 */
export interface EmeliaNodeParameters {

    /**
     * Default: "campaign"
     */
    readonly resource: "campaign" | "contactList";


}

