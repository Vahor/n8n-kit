// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NotionTriggerNodeParameters } from "../nodes/NotionTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface NotionTriggerProps extends NodeProps {
    readonly parameters: NotionTriggerNodeParameters;
    readonly notionApiCredentials: Credentials<NotionApiCredentials>;
}

/**
 * Starts the workflow when Notion events occur
 */
export class NotionTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.notionTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: NotionTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.notionApiCredentials];
    }

}
