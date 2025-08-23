// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TrelloApiCredentials } from "../credentials/TrelloApi.ts";
import type { Credentials } from "../../credentials";
import type { TrelloNodeParameters } from "../nodes/Trello";
import { Node, type NodeProps } from "../../nodes";

export interface TrelloProps extends NodeProps {

    readonly parameters: TrelloNodeParameters;
    readonly trelloApiCredentials: Credentials<TrelloApiCredentials>;

}

export class Trello<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.trello" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TrelloProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.trelloApiCredentials];

    }


}
