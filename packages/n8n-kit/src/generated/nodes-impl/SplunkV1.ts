// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplunkApiCredentials } from "../credentials/SplunkApi.ts";
import type { Credentials } from "../../credentials";
import type { SplunkV1NodeParameters } from "../nodes/SplunkV1";
import { Node, type NodeProps } from "../../nodes";

export interface SplunkV1Props extends NodeProps, SplunkV1NodeParameters {

    readonly splunkApiCredentials: Credentials<SplunkApiCredentials>;

}

export class SplunkV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splunk" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SplunkV1Props) {

        super(id, props);

    }

    override getParameters() {

        const { splunkApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.splunkApiCredentials];

    }


}

