// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBusinessProfileNodeParameters } from "../nodes/GoogleBusinessProfile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleBusinessProfileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleBusinessProfileNodeParameters;
    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;
}

/**
 * Consume Google Business Profile API
 */
export class GoogleBusinessProfile<L extends string, C extends IContext = never, P extends GoogleBusinessProfileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleBusinessProfile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleBusinessProfileOAuth2ApiCredentials];
    }

}
