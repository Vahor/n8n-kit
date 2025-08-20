// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Segment/Segment.node.ts' node

export const name = "segment" as const;
export const description = "Consume Segment API" as const;
export const version = 1 as const;
export const defaults = {"name":"Segment"} as const;
export const credentials = [{"name":"segmentApi","required":true}] as const

/**
 * Consume Segment API
 */
export interface SegmentNodeParameters {

    /**
     * Default: "identify"
     */
    readonly resource?: "group" | "identify" | "track";


}

