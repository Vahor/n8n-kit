// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MonicaCrmApiCredentials } from "../credentials/MonicaCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { MonicaCrmNodeParameters } from "../nodes/MonicaCrm";
import { Node, type NodeProps } from "../../nodes";

export interface MonicaCrmProps extends NodeProps, MonicaCrmNodeParameters {

    readonly monicaCrmApiCredentials: Credentials<MonicaCrmApiCredentials>;

}

export class MonicaCrm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.monicaCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MonicaCrmProps) {

        super(id, props);

    }

    override getParameters() : Omit<MonicaCrmNodeParameters, "monicaCrmApiCredentials"> {

        const { monicaCrmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.monicaCrmApiCredentials];

    }


}
