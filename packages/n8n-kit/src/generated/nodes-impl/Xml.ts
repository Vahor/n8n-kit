// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { XmlNodeParameters } from "../nodes/Xml";
import { Node, type NodeProps } from "../../nodes/node";

export interface XmlProps extends NodeProps {
    readonly parameters: XmlNodeParameters;
}

/**
 * Convert data from and to XML
 */
export class Xml<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.xml" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: XmlProps) {
        super(id, props);
    }

}
