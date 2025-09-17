// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HarvestApiCredentials } from "../credentials/HarvestApi.ts";
import type { HarvestOAuth2ApiCredentials } from "../credentials/HarvestOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HarvestNodeParameters } from "../nodes/Harvest";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HarvestProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HarvestNodeParameters;
    readonly harvestApiCredentials?: Credentials<HarvestApiCredentials>;
    readonly harvestOAuth2ApiCredentials?: Credentials<HarvestOAuth2ApiCredentials>;
}

/**
 * Access data on Harvest
 */
export class Harvest<L extends string, C extends IContext = never, P extends HarvestProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.harvest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.harvestApiCredentials, this.props?.harvestOAuth2ApiCredentials];
    }

}
