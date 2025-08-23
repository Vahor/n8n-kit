// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HtmlNodeParameters } from "../nodes/Html";
import { Node, type NodeProps } from "../../nodes";

export interface HtmlProps extends NodeProps, HtmlNodeParameters {


}

export class Html<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.html" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props?: HtmlProps) {

        super(id, props);

    }

    override getParameters() : HtmlNodeParameters {

        return this.props ?? {};

    }


}
