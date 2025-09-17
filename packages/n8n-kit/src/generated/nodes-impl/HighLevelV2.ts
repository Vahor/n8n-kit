// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HighLevelOAuth2ApiCredentials } from "../credentials/HighLevelOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HighLevelV2NodeParameters } from "../nodes/HighLevelV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HighLevelV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HighLevelV2NodeParameters;
    readonly highLevelOAuth2ApiCredentials: Credentials<HighLevelOAuth2ApiCredentials>;
}

/**
 * Consume HighLevel API v2
 */
export class HighLevelV2<L extends string, C extends IContext = never, P extends HighLevelV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.highLevel" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.highLevelOAuth2ApiCredentials];
    }

}
