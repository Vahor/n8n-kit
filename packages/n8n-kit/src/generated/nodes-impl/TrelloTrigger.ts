// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TrelloApiCredentials } from "../credentials/TrelloApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TrelloTriggerNodeParameters } from "../nodes/TrelloTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TrelloTriggerProps extends NodeProps {
    readonly parameters: TrelloTriggerNodeParameters;
    readonly trelloApiCredentials: Credentials<TrelloApiCredentials>;
}

/**
 * Starts the workflow when Trello events occur
 */
export class TrelloTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.trelloTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TrelloTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.trelloApiCredentials];
    }

}
