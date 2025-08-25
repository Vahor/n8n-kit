// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KeapOAuth2ApiCredentials } from "../credentials/KeapOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KeapNodeParameters } from "../nodes/Keap";
import { Node, type NodeProps } from "../../nodes/node";

export interface KeapProps extends NodeProps {
    readonly parameters: KeapNodeParameters;
    readonly keapOAuth2ApiCredentials: Credentials<KeapOAuth2ApiCredentials>;
}

/**
 * Consume Keap API
 */
export class Keap<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.keap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KeapProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.keapOAuth2ApiCredentials];
    }

}
