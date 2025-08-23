// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MetabaseApiCredentials } from "../credentials/MetabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { MetabaseNodeParameters } from "../nodes/Metabase";
import { Node, type NodeProps } from "../../nodes";

export interface MetabaseProps extends NodeProps, MetabaseNodeParameters {

    readonly metabaseApiCredentials: Credentials<MetabaseApiCredentials>;

}

export class Metabase<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.metabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MetabaseProps) {

        super(id, props);

    }

    override getParameters() {

        const { metabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.metabaseApiCredentials];

    }


}

