// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WekanApiCredentials } from "../credentials/WekanApi.ts";
import type { Credentials } from "../../credentials";
import type { WekanNodeParameters } from "../nodes/Wekan";
import { Node, type NodeProps } from "../../nodes";

export interface WekanProps extends NodeProps, WekanNodeParameters {

    readonly wekanApiCredentials: Credentials<WekanApiCredentials>;

}

export class Wekan<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wekan" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WekanProps) {

        super(id, props);

    }

    override getParameters() {

        const { wekanApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wekanApiCredentials];

    }


}

