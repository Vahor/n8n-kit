// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZammadBasicAuthApiCredentials } from "../credentials/ZammadBasicAuthApi.ts";
import type { ZammadTokenAuthApiCredentials } from "../credentials/ZammadTokenAuthApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZammadNodeParameters } from "../nodes/Zammad";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ZammadProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ZammadNodeParameters;
    readonly zammadBasicAuthApiCredentials?: Credentials<ZammadBasicAuthApiCredentials>;
    readonly zammadTokenAuthApiCredentials?: Credentials<ZammadTokenAuthApiCredentials>;
}

/**
 * Consume the Zammad API
 */
export class Zammad<L extends string, C extends IContext = never, P extends ZammadProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.zammad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.zammadBasicAuthApiCredentials, this.props?.zammadTokenAuthApiCredentials];
    }

}
