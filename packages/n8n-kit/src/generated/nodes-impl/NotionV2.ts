// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { NotionV2NodeParameters } from "../nodes/NotionV2";
import { Node, type NodeProps } from "../../nodes";

export interface NotionV2Props extends NodeProps {

    readonly parameters: NotionV2NodeParameters;
    readonly notionApiCredentials: Credentials<NotionApiCredentials>;

}

/**
 * Consume Notion API
 */
export class NotionV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.notion" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props: NotionV2Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.notionApiCredentials];

    }


}
