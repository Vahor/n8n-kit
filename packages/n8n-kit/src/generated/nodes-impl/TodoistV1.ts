// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TodoistApiCredentials } from "../credentials/TodoistApi.ts";
import type { TodoistOAuth2ApiCredentials } from "../credentials/TodoistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TodoistV1NodeParameters } from "../nodes/TodoistV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface TodoistV1Props extends NodeProps {
    readonly parameters: TodoistV1NodeParameters;
    readonly todoistApiCredentials?: Credentials<TodoistApiCredentials>;
    readonly todoistOAuth2ApiCredentials?: Credentials<TodoistOAuth2ApiCredentials>;
}

/**
 * Consume Todoist API
 */
export class TodoistV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.todoist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TodoistV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.todoistApiCredentials, this.props!.todoistOAuth2ApiCredentials];
    }

}
