// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XmlNodeParameters } from "../nodes/Xml";
import { Node, type NodeProps } from "../../nodes";

export interface XmlProps extends NodeProps, XmlNodeParameters {


}

export class Xml<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.xml" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: XmlProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

