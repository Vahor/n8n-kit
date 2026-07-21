// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { NotionOAuth2ApiCredentials } from "../credentials/NotionOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NotionV3NodeParameters } from "../nodes/NotionV3";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NotionV3Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NotionV3NodeParameters;
    readonly notionApiCredentials?: Credentials<NotionApiCredentials>;
    readonly notionOAuth2ApiCredentials?: Credentials<NotionOAuth2ApiCredentials>;
}

/**
 * Consume Notion API
 */
export class NotionV3<L extends string, C extends IContext = never, P extends NotionV3Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.notion" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.notionApiCredentials, this.props?.notionOAuth2ApiCredentials];
    }

}
