// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UnleashedSoftwareApiCredentials } from "../credentials/UnleashedSoftwareApi.ts";
import type { Credentials } from "../../credentials";
import type { UnleashedSoftwareNodeParameters } from "../nodes/UnleashedSoftware";
import { Node, type NodeProps } from "../../nodes";

export interface UnleashedSoftwareProps extends NodeProps, UnleashedSoftwareNodeParameters {

    readonly unleashedSoftwareApiCredentials: Credentials<UnleashedSoftwareApiCredentials>;

}

export class UnleashedSoftware<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.unleashedSoftware" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: UnleashedSoftwareProps) {

        super(id, props);

    }

    override getParameters() {

        const { unleashedSoftwareApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.unleashedSoftwareApiCredentials];

    }


}

