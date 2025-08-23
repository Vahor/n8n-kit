// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplunkApiCredentials } from "../credentials/SplunkApi.ts";
import type { Credentials } from "../../credentials";
import type { SplunkV2NodeParameters } from "../nodes/SplunkV2";
import { Node, type NodeProps } from "../../nodes";

export interface SplunkV2Props extends NodeProps, SplunkV2NodeParameters {

    readonly splunkApiCredentials: Credentials<SplunkApiCredentials>;

}

export class SplunkV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splunk" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: SplunkV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<SplunkV2NodeParameters, "splunkApiCredentials"> {

        const { splunkApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.splunkApiCredentials];

    }


}

