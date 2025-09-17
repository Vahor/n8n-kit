// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AsanaApiCredentials } from "../credentials/AsanaApi.ts";
import type { AsanaOAuth2ApiCredentials } from "../credentials/AsanaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AsanaNodeParameters } from "../nodes/Asana";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AsanaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AsanaNodeParameters;
    readonly asanaApiCredentials?: Credentials<AsanaApiCredentials>;
    readonly asanaOAuth2ApiCredentials?: Credentials<AsanaOAuth2ApiCredentials>;
}

/**
 * Consume Asana REST API
 */
export class Asana<L extends string, C extends IContext = never, P extends AsanaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.asana" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.asanaApiCredentials, this.props?.asanaOAuth2ApiCredentials];
    }

}
