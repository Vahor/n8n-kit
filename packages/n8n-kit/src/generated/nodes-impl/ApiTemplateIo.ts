// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ApiTemplateIoApiCredentials } from "../credentials/ApiTemplateIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ApiTemplateIoNodeParameters } from "../nodes/ApiTemplateIo";
import { Node, type NodeProps } from "../../nodes/node";

export interface ApiTemplateIoProps extends NodeProps {
    readonly parameters: ApiTemplateIoNodeParameters;
    readonly apiTemplateIoApiCredentials: Credentials<ApiTemplateIoApiCredentials>;
}

/**
 * Consume the APITemplate.io API
 */
export class ApiTemplateIo<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.apiTemplateIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ApiTemplateIoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.apiTemplateIoApiCredentials];
    }

}
