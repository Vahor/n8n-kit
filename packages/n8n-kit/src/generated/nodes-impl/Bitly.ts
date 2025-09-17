// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitlyApiCredentials } from "../credentials/BitlyApi.ts";
import type { BitlyOAuth2ApiCredentials } from "../credentials/BitlyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BitlyNodeParameters } from "../nodes/Bitly";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BitlyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BitlyNodeParameters;
    readonly bitlyApiCredentials?: Credentials<BitlyApiCredentials>;
    readonly bitlyOAuth2ApiCredentials?: Credentials<BitlyOAuth2ApiCredentials>;
}

/**
 * Consume Bitly API
 */
export class Bitly<L extends string, C extends IContext = never, P extends BitlyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.bitly" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.bitlyApiCredentials, this.props?.bitlyOAuth2ApiCredentials];
    }

}
