// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NetlifyApiCredentials } from "../credentials/NetlifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NetlifyNodeParameters } from "../nodes/Netlify";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NetlifyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NetlifyNodeParameters;
    readonly netlifyApiCredentials: Credentials<NetlifyApiCredentials>;
}

/**
 * Consume Netlify API
 */
export class Netlify<L extends string, C extends IContext = never, P extends NetlifyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.netlify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.netlifyApiCredentials];
    }

}
