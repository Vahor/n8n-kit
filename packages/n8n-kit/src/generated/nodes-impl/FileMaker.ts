// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FileMakerCredentials } from "../credentials/FileMaker.ts";
import type { Credentials } from "../../credentials";
import type { FileMakerNodeParameters } from "../nodes/FileMaker";
import { Node, type NodeProps } from "../../nodes";

export interface FileMakerProps extends NodeProps {

    readonly parameters: FileMakerNodeParameters;
    readonly fileMakerCredentials: Credentials<FileMakerCredentials>;

}

export class FileMaker<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.filemaker" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FileMakerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.fileMakerCredentials];

    }


}
