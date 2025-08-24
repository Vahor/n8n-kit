// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LemlistV2NodeParameters } from "../nodes/LemlistV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface LemlistV2Props extends NodeProps {
    readonly parameters: LemlistV2NodeParameters;
    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;
}

/**
 * Consume the Lemlist API
 */
export class LemlistV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: LemlistV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.lemlistApiCredentials];
    }

}
