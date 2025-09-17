// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinearApiCredentials } from "../credentials/LinearApi.ts";
import type { LinearOAuth2ApiCredentials } from "../credentials/LinearOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LinearNodeParameters } from "../nodes/Linear";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LinearProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LinearNodeParameters;
    readonly linearApiCredentials?: Credentials<LinearApiCredentials>;
    readonly linearOAuth2ApiCredentials?: Credentials<LinearOAuth2ApiCredentials>;
}

/**
 * Consume Linear API
 */
export class Linear<L extends string, C extends IContext = never, P extends LinearProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.linear" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.linearApiCredentials, this.props?.linearOAuth2ApiCredentials];
    }

}
