// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SerpApiCredentials } from "../credentials/SerpApi.ts";
import type { Credentials } from "../../credentials";
import type { ToolSerpApiNodeParameters } from "../nodes/ToolSerpApi";
import { Node, type NodeProps } from "../../nodes";

export interface ToolSerpApiProps extends NodeProps, ToolSerpApiNodeParameters {

    readonly serpApiCredentials: Credentials<SerpApiCredentials>;

}

export class ToolSerpApi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolSerpApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ToolSerpApiProps) {

        super(id, props);

    }

    override getParameters() : Omit<ToolSerpApiNodeParameters, "serpApiCredentials"> {

        const { serpApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.serpApiCredentials];

    }


}
