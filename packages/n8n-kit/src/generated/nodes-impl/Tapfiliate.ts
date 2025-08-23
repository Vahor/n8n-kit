// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TapfiliateApiCredentials } from "../credentials/TapfiliateApi.ts";
import type { Credentials } from "../../credentials";
import type { TapfiliateNodeParameters } from "../nodes/Tapfiliate";
import { Node, type NodeProps } from "../../nodes";

export interface TapfiliateProps extends NodeProps, TapfiliateNodeParameters {

    readonly tapfiliateApiCredentials: Credentials<TapfiliateApiCredentials>;

}

export class Tapfiliate<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.tapfiliate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TapfiliateProps) {

        super(id, props);

    }

    override getParameters() : Omit<TapfiliateNodeParameters, "tapfiliateApiCredentials"> {

        const { tapfiliateApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.tapfiliateApiCredentials];

    }


}

