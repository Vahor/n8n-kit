// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SegmentApiCredentials } from "../credentials/SegmentApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SegmentNodeParameters } from "../nodes/Segment";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SegmentProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SegmentNodeParameters;
    readonly segmentApiCredentials: Credentials<SegmentApiCredentials>;
}

/**
 * Consume Segment API
 */
export class Segment<L extends string, C extends IContext = never, P extends SegmentProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.segment" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.segmentApiCredentials];
    }

}
