// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { OpenThesaurusNodeParameters } from "../nodes/OpenThesaurus";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OpenThesaurusProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OpenThesaurusNodeParameters;
}

/**
 * Get synonmns for German words using the OpenThesaurus API
 */
export class OpenThesaurus<L extends string, C extends IContext = never, P extends OpenThesaurusProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.openThesaurus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
