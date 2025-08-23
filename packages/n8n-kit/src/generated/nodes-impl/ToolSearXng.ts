// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SearXngApiCredentials } from "../credentials/SearXngApi.ts";
import type { Credentials } from "../../credentials";
import type { ToolSearXngNodeParameters } from "../nodes/ToolSearXng";
import { Node, type NodeProps } from "../../nodes";

export interface ToolSearXngProps extends NodeProps, ToolSearXngNodeParameters {

    readonly searXngApiCredentials: Credentials<SearXngApiCredentials>;

}

export class ToolSearXng<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolSearXng" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ToolSearXngProps) {

        super(id, props);

    }

    override getParameters() : Omit<ToolSearXngNodeParameters, "searXngApiCredentials"> {

        const { searXngApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.searXngApiCredentials];

    }


}
