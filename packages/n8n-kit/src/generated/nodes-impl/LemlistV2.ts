// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LemlistV2NodeParameters } from "../nodes/LemlistV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LemlistV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LemlistV2NodeParameters;
    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;
}

/**
 * Consume the Lemlist API
 */
export class LemlistV2<L extends string, C extends IContext = never, P extends LemlistV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.lemlistApiCredentials];
    }

}
