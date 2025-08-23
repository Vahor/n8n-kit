// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { EmeliaNodeParameters } from "../nodes/Emelia";
import { Node, type NodeProps } from "../../nodes";

export interface EmeliaProps extends NodeProps, EmeliaNodeParameters {

    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;

}

export class Emelia<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emelia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmeliaProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmeliaNodeParameters, "emeliaApiCredentials"> {

        const { emeliaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.emeliaApiCredentials];

    }


}

