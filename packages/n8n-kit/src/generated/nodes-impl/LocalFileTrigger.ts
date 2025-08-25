// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { LocalFileTriggerNodeParameters } from "../nodes/LocalFileTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface LocalFileTriggerProps extends NodeProps {
    readonly parameters: LocalFileTriggerNodeParameters;
}

/**
 * Triggers a workflow on file system changes
 */
export class LocalFileTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.localFileTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LocalFileTriggerProps) {
        super(id, props);
    }

}
