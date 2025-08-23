// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LocalFileTriggerNodeParameters } from "../nodes/LocalFileTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface LocalFileTriggerProps extends NodeProps {

    readonly parameters: LocalFileTriggerNodeParameters;

}

export class LocalFileTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.localFileTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LocalFileTriggerProps) {

        super(id, props);

    }


}
