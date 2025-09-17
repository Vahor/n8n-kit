// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MauticApiCredentials } from "../credentials/MauticApi.ts";
import type { MauticOAuth2ApiCredentials } from "../credentials/MauticOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MauticTriggerNodeParameters } from "../nodes/MauticTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MauticTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MauticTriggerNodeParameters;
    readonly mauticApiCredentials?: Credentials<MauticApiCredentials>;
    readonly mauticOAuth2ApiCredentials?: Credentials<MauticOAuth2ApiCredentials>;
}

/**
 * Handle Mautic events via webhooks
 */
export class MauticTrigger<L extends string, C extends IContext = never, P extends MauticTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mauticTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mauticApiCredentials, this.props?.mauticOAuth2ApiCredentials];
    }

}
