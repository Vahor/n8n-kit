// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TrelloApiCredentials } from "../credentials/TrelloApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TrelloNodeParameters } from "../nodes/Trello";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TrelloProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TrelloNodeParameters;
    readonly trelloApiCredentials: Credentials<TrelloApiCredentials>;
}

/**
 * Create, change and delete boards and cards
 */
export class Trello<L extends string, C extends IContext = never, P extends TrelloProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.trello" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.trelloApiCredentials];
    }

}
