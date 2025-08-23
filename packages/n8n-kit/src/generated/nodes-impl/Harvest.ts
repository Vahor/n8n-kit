// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HarvestApiCredentials } from "../credentials/HarvestApi.ts";
import type { HarvestOAuth2ApiCredentials } from "../credentials/HarvestOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HarvestNodeParameters } from "../nodes/Harvest";
import { Node, type NodeProps } from "../../nodes";

export interface HarvestProps extends NodeProps, HarvestNodeParameters {

    readonly harvestApiCredentials?: Credentials<HarvestApiCredentials>;
    readonly harvestOAuth2ApiCredentials?: Credentials<HarvestOAuth2ApiCredentials>;

}

export class Harvest<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.harvest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: HarvestProps) {

        super(id, props);

    }

    override getParameters() {

        const { harvestApiCredentials:_0, harvestOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.harvestApiCredentials, this.props.harvestOAuth2ApiCredentials];

    }


}

