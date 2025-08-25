// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SegmentApiCredentials } from "../credentials/SegmentApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SegmentNodeParameters } from "../nodes/Segment";
import { Node, type NodeProps } from "../../nodes/node";

export interface SegmentProps extends NodeProps {
    readonly parameters: SegmentNodeParameters;
    readonly segmentApiCredentials: Credentials<SegmentApiCredentials>;
}

/**
 * Consume Segment API
 */
export class Segment<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.segment" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SegmentProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.segmentApiCredentials];
    }

}
