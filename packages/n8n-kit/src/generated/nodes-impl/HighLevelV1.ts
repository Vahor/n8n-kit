// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HighLevelApiCredentials } from "../credentials/HighLevelApi.ts";
import type { Credentials } from "../../credentials";
import type { HighLevelV1NodeParameters } from "../nodes/HighLevelV1";
import { Node, type NodeProps } from "../../nodes";

export interface HighLevelV1Props extends NodeProps, HighLevelV1NodeParameters {

    readonly highLevelApiCredentials: Credentials<HighLevelApiCredentials>;

}

export class HighLevelV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.highLevel" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HighLevelV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<HighLevelV1NodeParameters, "highLevelApiCredentials"> {

        const { highLevelApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.highLevelApiCredentials];

    }


}
