// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LemlistV1NodeParameters } from "../nodes/LemlistV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LemlistV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LemlistV1NodeParameters;
    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;
}

/**
 * Consume the Lemlist API
 */
export class LemlistV1<L extends string, C extends IContext = never, P extends LemlistV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.lemlistApiCredentials];
    }

}
