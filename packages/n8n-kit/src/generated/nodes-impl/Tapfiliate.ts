// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TapfiliateApiCredentials } from "../credentials/TapfiliateApi.ts";
import type { Credentials } from "../../credentials";
import type { TapfiliateNodeParameters } from "../nodes/Tapfiliate";
import { Node, type NodeProps } from "../../nodes/node";

export interface TapfiliateProps extends NodeProps {
    readonly parameters: TapfiliateNodeParameters;
    readonly tapfiliateApiCredentials: Credentials<TapfiliateApiCredentials>;
}

/**
 * Consume Tapfiliate API
 */
export class Tapfiliate<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.tapfiliate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TapfiliateProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.tapfiliateApiCredentials];
    }

}
