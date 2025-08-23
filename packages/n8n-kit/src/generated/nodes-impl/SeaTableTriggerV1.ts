// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { SeaTableTriggerV1NodeParameters } from "../nodes/SeaTableTriggerV1";
import { Node, type NodeProps } from "../../nodes";

export interface SeaTableTriggerV1Props extends NodeProps, SeaTableTriggerV1NodeParameters {

    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;

}

export class SeaTableTriggerV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SeaTableTriggerV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<SeaTableTriggerV1NodeParameters, "seaTableApiCredentials"> {

        const { seaTableApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.seaTableApiCredentials];

    }


}

