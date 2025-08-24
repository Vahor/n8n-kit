// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { OpenThesaurusNodeParameters } from "../nodes/OpenThesaurus";
import { Node, type NodeProps } from "../../nodes/node";

export interface OpenThesaurusProps extends NodeProps {
    readonly parameters: OpenThesaurusNodeParameters;
}

/**
 * Get synonmns for German words using the OpenThesaurus API
 */
export class OpenThesaurus<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.openThesaurus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: OpenThesaurusProps) {
        super(id, props);
    }

}
