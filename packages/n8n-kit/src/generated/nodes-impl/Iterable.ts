// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IterableApiCredentials } from "../credentials/IterableApi.ts";
import type { Credentials } from "../../credentials";
import type { IterableNodeParameters } from "../nodes/Iterable";
import { Node, type NodeProps } from "../../nodes";

export interface IterableProps extends NodeProps, IterableNodeParameters {

    readonly iterableApiCredentials: Credentials<IterableApiCredentials>;

}

export class Iterable<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.iterable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: IterableProps) {

        super(id, props);

    }

    override getParameters() : Omit<IterableNodeParameters, "iterableApiCredentials"> {

        const { iterableApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.iterableApiCredentials];

    }


}
