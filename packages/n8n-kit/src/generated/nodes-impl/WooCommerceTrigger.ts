// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WooCommerceApiCredentials } from "../credentials/WooCommerceApi.ts";
import type { Credentials } from "../../credentials";
import type { WooCommerceTriggerNodeParameters } from "../nodes/WooCommerceTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WooCommerceTriggerProps extends NodeProps {

    readonly parameters: WooCommerceTriggerNodeParameters;
    readonly wooCommerceApiCredentials: Credentials<WooCommerceApiCredentials>;

}

export class WooCommerceTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wooCommerceTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WooCommerceTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.wooCommerceApiCredentials];

    }


}
