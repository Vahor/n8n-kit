// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NotionApiCredentials } from "../credentials/NotionApi.ts";
import type { Credentials } from "../../credentials";
import type { NotionTriggerNodeParameters } from "../nodes/NotionTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface NotionTriggerProps extends NodeProps, NotionTriggerNodeParameters {

    readonly notionApiCredentials: Credentials<NotionApiCredentials>;

}

export class NotionTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.notionTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NotionTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<NotionTriggerNodeParameters, "notionApiCredentials"> {

        const { notionApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.notionApiCredentials];

    }


}
