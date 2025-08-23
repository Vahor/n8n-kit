// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenThesaurusNodeParameters } from "../nodes/OpenThesaurus";
import { Node, type NodeProps } from "../../nodes";

export interface OpenThesaurusProps extends NodeProps {

    readonly parameters: OpenThesaurusNodeParameters;

}

/**
 * Get synonmns for German words using the OpenThesaurus API
 */
export class OpenThesaurus<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.openThesaurus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: OpenThesaurusProps) {

        super(id, props);

    }


}
