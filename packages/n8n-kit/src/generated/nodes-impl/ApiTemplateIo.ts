// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ApiTemplateIoApiCredentials } from "../credentials/ApiTemplateIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ApiTemplateIoNodeParameters } from "../nodes/ApiTemplateIo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ApiTemplateIoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ApiTemplateIoNodeParameters;
    readonly apiTemplateIoApiCredentials: Credentials<ApiTemplateIoApiCredentials>;
}

/**
 * Consume the APITemplate.io API
 */
export class ApiTemplateIo<L extends string, C extends IContext = never, P extends ApiTemplateIoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.apiTemplateIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.apiTemplateIoApiCredentials];
    }

}
