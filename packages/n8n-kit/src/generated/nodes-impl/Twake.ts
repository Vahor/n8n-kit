// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwakeCloudApiCredentials } from "../credentials/TwakeCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { TwakeNodeParameters } from "../nodes/Twake";
import { Node, type NodeProps } from "../../nodes";

export interface TwakeProps extends NodeProps, TwakeNodeParameters {

    readonly twakeCloudApiCredentials: Credentials<TwakeCloudApiCredentials>;

}

export class Twake<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.twake" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TwakeProps) {

        super(id, props);

    }

    override getParameters() : Omit<TwakeNodeParameters, "twakeCloudApiCredentials"> {

        const { twakeCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.twakeCloudApiCredentials];

    }


}

