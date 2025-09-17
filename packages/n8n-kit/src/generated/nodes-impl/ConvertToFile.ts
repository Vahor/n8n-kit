// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ConvertToFileNodeParameters } from "../nodes/ConvertToFile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ConvertToFileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ConvertToFileNodeParameters;
}

/**
 * Convert JSON data to binary data
 */
export class ConvertToFile<L extends string, C extends IContext = never, P extends ConvertToFileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.convertToFile" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
