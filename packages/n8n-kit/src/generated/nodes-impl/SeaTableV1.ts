// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { SeaTableV1NodeParameters } from "../nodes/SeaTableV1";
import { Node, type NodeProps } from "../../nodes";

export interface SeaTableV1Props extends NodeProps, SeaTableV1NodeParameters {

    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;

}

export class SeaTableV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.seaTable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SeaTableV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<SeaTableV1NodeParameters, "seaTableApiCredentials"> {

        const { seaTableApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.seaTableApiCredentials];

    }


}

