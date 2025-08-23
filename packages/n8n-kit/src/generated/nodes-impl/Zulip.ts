// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZulipApiCredentials } from "../credentials/ZulipApi.ts";
import type { Credentials } from "../../credentials";
import type { ZulipNodeParameters } from "../nodes/Zulip";
import { Node, type NodeProps } from "../../nodes";

export interface ZulipProps extends NodeProps, ZulipNodeParameters {

    readonly zulipApiCredentials: Credentials<ZulipApiCredentials>;

}

export class Zulip<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.zulip" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ZulipProps) {

        super(id, props);

    }

    override getParameters() : Omit<ZulipNodeParameters, "zulipApiCredentials"> {

        const { zulipApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zulipApiCredentials];

    }


}
