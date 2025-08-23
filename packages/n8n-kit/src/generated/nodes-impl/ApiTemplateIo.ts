// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ApiTemplateIoApiCredentials } from "../credentials/ApiTemplateIoApi.ts";
import type { Credentials } from "../../credentials";
import type { ApiTemplateIoNodeParameters } from "../nodes/ApiTemplateIo";
import { Node, type NodeProps } from "../../nodes";

export interface ApiTemplateIoProps extends NodeProps, ApiTemplateIoNodeParameters {

    readonly apiTemplateIoApiCredentials: Credentials<ApiTemplateIoApiCredentials>;

}

export class ApiTemplateIo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.apiTemplateIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ApiTemplateIoProps) {

        super(id, props);

    }

    override getParameters() {

        const { apiTemplateIoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.apiTemplateIoApiCredentials];

    }


}

