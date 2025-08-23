// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RenameKeysNodeParameters } from "../nodes/RenameKeys";
import { Node, type NodeProps } from "../../nodes";

export interface RenameKeysProps extends NodeProps, RenameKeysNodeParameters {


}

export class RenameKeys<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.renameKeys" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: RenameKeysProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

