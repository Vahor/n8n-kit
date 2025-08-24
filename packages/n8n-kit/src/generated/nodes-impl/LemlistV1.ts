// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LemlistV1NodeParameters } from "../nodes/LemlistV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface LemlistV1Props extends NodeProps {
    readonly parameters: LemlistV1NodeParameters;
    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;
}

/**
 * Consume the Lemlist API
 */
export class LemlistV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LemlistV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.lemlistApiCredentials];
    }

}
