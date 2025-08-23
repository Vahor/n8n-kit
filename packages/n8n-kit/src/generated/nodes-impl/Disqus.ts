// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DisqusApiCredentials } from "../credentials/DisqusApi.ts";
import type { Credentials } from "../../credentials";
import type { DisqusNodeParameters } from "../nodes/Disqus";
import { Node, type NodeProps } from "../../nodes";

export interface DisqusProps extends NodeProps, DisqusNodeParameters {

    readonly disqusApiCredentials: Credentials<DisqusApiCredentials>;

}

export class Disqus<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.disqus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DisqusProps) {

        super(id, props);

    }

    override getParameters() : Omit<DisqusNodeParameters, "disqusApiCredentials"> {

        const { disqusApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.disqusApiCredentials];

    }


}
