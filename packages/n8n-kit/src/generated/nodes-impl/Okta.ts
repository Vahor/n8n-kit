// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OktaApiCredentials } from "../credentials/OktaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OktaNodeParameters } from "../nodes/Okta";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OktaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OktaNodeParameters;
    readonly oktaApiCredentials: Credentials<OktaApiCredentials>;
}

/**
 * Use the Okta API
 */
export class Okta<L extends string, C extends IContext = never, P extends OktaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.okta" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.oktaApiCredentials];
    }

}
