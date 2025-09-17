// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ActiveCampaignNodeParameters } from "../nodes/ActiveCampaign";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ActiveCampaignProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ActiveCampaignNodeParameters;
    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;
}

/**
 * Create and edit data in ActiveCampaign
 */
export class ActiveCampaign<L extends string, C extends IContext = never, P extends ActiveCampaignProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.activeCampaign" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.activeCampaignApiCredentials];
    }

}
