// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { XmlNodeParameters } from "../nodes/Xml";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface XmlProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: XmlNodeParameters;
}

/**
 * Convert data from and to XML
 */
export class Xml<L extends string, C extends IContext = never, P extends XmlProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.xml" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
