// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBusinessProfileTriggerNodeParameters } from "../nodes/GoogleBusinessProfileTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleBusinessProfileTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleBusinessProfileTriggerNodeParameters;
    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;
}

/**
 * Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals.
 */
export class GoogleBusinessProfileTrigger<L extends string, C extends IContext = never, P extends GoogleBusinessProfileTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleBusinessProfileTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleBusinessProfileOAuth2ApiCredentials];
    }

}
