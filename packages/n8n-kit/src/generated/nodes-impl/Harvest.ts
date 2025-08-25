// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HarvestApiCredentials } from "../credentials/HarvestApi.ts";
import type { HarvestOAuth2ApiCredentials } from "../credentials/HarvestOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HarvestNodeParameters } from "../nodes/Harvest";
import { Node, type NodeProps } from "../../nodes/node";

export interface HarvestProps extends NodeProps {
    readonly parameters: HarvestNodeParameters;
    readonly harvestApiCredentials?: Credentials<HarvestApiCredentials>;
    readonly harvestOAuth2ApiCredentials?: Credentials<HarvestOAuth2ApiCredentials>;
}

/**
 * Access data on Harvest
 */
export class Harvest<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.harvest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HarvestProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.harvestApiCredentials, this.props!.harvestOAuth2ApiCredentials];
    }

}
