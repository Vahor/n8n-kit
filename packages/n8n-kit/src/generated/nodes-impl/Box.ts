// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BoxOAuth2ApiCredentials } from "../credentials/BoxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BoxNodeParameters } from "../nodes/Box";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BoxProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BoxNodeParameters;
    readonly boxOAuth2ApiCredentials: Credentials<BoxOAuth2ApiCredentials>;
}

/**
 * Consume Box API
 */
export class Box<L extends string, C extends IContext = never, P extends BoxProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.box" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.boxOAuth2ApiCredentials];
    }

}
