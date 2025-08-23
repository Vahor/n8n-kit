// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TodoistApiCredentials } from "../credentials/TodoistApi.ts";
import type { TodoistOAuth2ApiCredentials } from "../credentials/TodoistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { TodoistV1NodeParameters } from "../nodes/TodoistV1";
import { Node, type NodeProps } from "../../nodes";

export interface TodoistV1Props extends NodeProps, TodoistV1NodeParameters {

    readonly todoistApiCredentials?: Credentials<TodoistApiCredentials>;
    readonly todoistOAuth2ApiCredentials?: Credentials<TodoistOAuth2ApiCredentials>;

}

export class TodoistV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.todoist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TodoistV1Props) {

        super(id, props);

    }

    override getParameters() {

        const { todoistApiCredentials:_0, todoistOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.todoistApiCredentials, this.props.todoistOAuth2ApiCredentials];

    }


}

