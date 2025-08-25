// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExtractFromFileNodeParameters } from "../nodes/ExtractFromFile";
import { Node, type NodeProps } from "../../nodes/node";

export interface ExtractFromFileProps extends NodeProps {
    readonly parameters: ExtractFromFileNodeParameters;
}

/**
 * Convert binary data to JSON
 */
export class ExtractFromFile<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.extractFromFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ExtractFromFileProps) {
        super(id, props);
    }

}
