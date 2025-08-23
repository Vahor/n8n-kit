// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { NotionV1NodeParameters } from "../nodes/NotionV1";
import { Node, type NodeProps } from "../../nodes";

export interface NotionV1Props extends NodeProps, NotionV1NodeParameters {

    readonly notionApiCredentials: Credentials<NotionApiCredentials>;

}

export class NotionV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.notion" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NotionV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<NotionV1NodeParameters, "notionApiCredentials"> {

        const { notionApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.notionApiCredentials];

    }


}

