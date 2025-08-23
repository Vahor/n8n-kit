// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Magento2ApiCredentials } from "../credentials/Magento2Api.ts";
import type { Credentials } from "../../credentials";
import type { Magento2NodeParameters } from "../nodes/Magento2";
import { Node, type NodeProps } from "../../nodes";

export interface Magento2Props extends NodeProps, Magento2NodeParameters {

    readonly magento2ApiCredentials: Credentials<Magento2ApiCredentials>;

}

export class Magento2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.magento2" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: Magento2Props) {

        super(id, props);

    }

    override getParameters() : Omit<Magento2NodeParameters, "magento2ApiCredentials"> {

        const { magento2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.magento2ApiCredentials];

    }


}
