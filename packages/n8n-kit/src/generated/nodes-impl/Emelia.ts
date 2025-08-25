// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmeliaNodeParameters } from "../nodes/Emelia";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmeliaProps extends NodeProps {
    readonly parameters: EmeliaNodeParameters;
    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;
}

/**
 * Consume the Emelia API
 */
export class Emelia<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.emelia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmeliaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.emeliaApiCredentials];
    }

}
