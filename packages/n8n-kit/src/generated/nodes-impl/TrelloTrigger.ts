// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TrelloApiCredentials } from "../credentials/TrelloApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TrelloTriggerNodeParameters } from "../nodes/TrelloTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TrelloTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TrelloTriggerNodeParameters;
    readonly trelloApiCredentials: Credentials<TrelloApiCredentials>;
}

/**
 * Starts the workflow when Trello events occur
 */
export class TrelloTrigger<L extends string, C extends IContext = never, P extends TrelloTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.trelloTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.trelloApiCredentials];
    }

}
