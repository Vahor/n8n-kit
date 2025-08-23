// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenThesaurusNodeParameters } from "../nodes/OpenThesaurus";
import { Node, type NodeProps } from "../../nodes";

export interface OpenThesaurusProps extends NodeProps, OpenThesaurusNodeParameters {


}

export class OpenThesaurus<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.openThesaurus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OpenThesaurusProps) {

        super(id, props);

    }

    override getParameters() : OpenThesaurusNodeParameters {

        return this.props ?? {};

    }


}
