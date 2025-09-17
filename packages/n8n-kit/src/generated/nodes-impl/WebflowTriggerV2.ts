// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WebflowTriggerV2NodeParameters } from "../nodes/WebflowTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WebflowTriggerV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WebflowTriggerV2NodeParameters;
    readonly webflowOAuth2ApiCredentials: Credentials<WebflowOAuth2ApiCredentials>;
}

/**
 * Handle Webflow events via webhooks
 */
export class WebflowTriggerV2<L extends string, C extends IContext = never, P extends WebflowTriggerV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.webflowTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.webflowOAuth2ApiCredentials];
    }

}
