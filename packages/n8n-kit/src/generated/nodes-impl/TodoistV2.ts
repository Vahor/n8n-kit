// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TodoistApiCredentials } from "../credentials/TodoistApi.ts";
import type { TodoistOAuth2ApiCredentials } from "../credentials/TodoistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TodoistV2NodeParameters } from "../nodes/TodoistV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TodoistV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TodoistV2NodeParameters;
    readonly todoistApiCredentials?: Credentials<TodoistApiCredentials>;
    readonly todoistOAuth2ApiCredentials?: Credentials<TodoistOAuth2ApiCredentials>;
}

/**
 * Consume Todoist API
 */
export class TodoistV2<L extends string, C extends IContext = never, P extends TodoistV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.todoist" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.todoistApiCredentials, this.props?.todoistOAuth2ApiCredentials];
    }

}
