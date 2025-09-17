// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NotionV1NodeParameters } from "../nodes/NotionV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NotionV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NotionV1NodeParameters;
    readonly notionApiCredentials: Credentials<NotionApiCredentials>;
}

/**
 * Consume Notion API
 */
export class NotionV1<L extends string, C extends IContext = never, P extends NotionV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.notion" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.notionApiCredentials];
    }

}
