// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertToFileNodeParameters } from "../nodes/ConvertToFile";
import { Node, type NodeProps } from "../../nodes";

export interface ConvertToFileProps extends NodeProps {

    readonly parameters: ConvertToFileNodeParameters;

}

/**
 * Convert JSON data to binary data
 */
export class ConvertToFile<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.convertToFile" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ConvertToFileProps) {

        super(id, props);

    }


}
