// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FileMakerCredentials } from "../credentials/FileMaker.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FileMakerNodeParameters } from "../nodes/FileMaker";
import { Node, type NodeProps } from "../../nodes/node";

export interface FileMakerProps extends NodeProps {
    readonly parameters: FileMakerNodeParameters;
    readonly fileMakerCredentials: Credentials<FileMakerCredentials>;
}

/**
 * Retrieve data from the FileMaker data API
 */
export class FileMaker<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.filemaker" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FileMakerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.fileMakerCredentials];
    }

}
