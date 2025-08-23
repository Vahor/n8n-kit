// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TrelloApiCredentials } from "../credentials/TrelloApi.ts";
import type { Credentials } from "../../credentials";
import type { TrelloTriggerNodeParameters } from "../nodes/TrelloTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TrelloTriggerProps extends NodeProps, TrelloTriggerNodeParameters {

    readonly trelloApiCredentials: Credentials<TrelloApiCredentials>;

}

export class TrelloTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.trelloTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TrelloTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<TrelloTriggerNodeParameters, "trelloApiCredentials"> {

        const { trelloApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.trelloApiCredentials];

    }


}

