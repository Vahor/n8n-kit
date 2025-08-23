// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SegmentApiCredentials } from "../credentials/SegmentApi.ts";
import type { Credentials } from "../../credentials";
import type { SegmentNodeParameters } from "../nodes/Segment";
import { Node, type NodeProps } from "../../nodes";

export interface SegmentProps extends NodeProps, SegmentNodeParameters {

    readonly segmentApiCredentials: Credentials<SegmentApiCredentials>;

}

export class Segment<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.segment" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SegmentProps) {

        super(id, props);

    }

    override getParameters() : Omit<SegmentNodeParameters, "segmentApiCredentials"> {

        const { segmentApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.segmentApiCredentials];

    }


}

