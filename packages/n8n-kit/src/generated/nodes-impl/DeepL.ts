// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepLApiCredentials } from "../credentials/DeepLApi.ts";
import type { Credentials } from "../../credentials";
import type { DeepLNodeParameters } from "../nodes/DeepL";
import { Node, type NodeProps } from "../../nodes";

export interface DeepLProps extends NodeProps, DeepLNodeParameters {

    readonly deepLApiCredentials: Credentials<DeepLApiCredentials>;

}

export class DeepL<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.deepL" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DeepLProps) {

        super(id, props);

    }

    override getParameters() : Omit<DeepLNodeParameters, "deepLApiCredentials"> {

        const { deepLApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.deepLApiCredentials];

    }


}

