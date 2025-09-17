// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NotionTriggerNodeParameters } from "../nodes/NotionTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NotionTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NotionTriggerNodeParameters;
    readonly notionApiCredentials: Credentials<NotionApiCredentials>;
}

/**
 * Starts the workflow when Notion events occur
 */
export class NotionTrigger<L extends string, C extends IContext = never, P extends NotionTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.notionTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.notionApiCredentials];
    }

}
