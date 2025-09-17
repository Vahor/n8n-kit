// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StravaOAuth2ApiCredentials } from "../credentials/StravaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StravaNodeParameters } from "../nodes/Strava";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StravaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StravaNodeParameters;
    readonly stravaOAuth2ApiCredentials: Credentials<StravaOAuth2ApiCredentials>;
}

/**
 * Consume Strava API
 */
export class Strava<L extends string, C extends IContext = never, P extends StravaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.strava" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.stravaOAuth2ApiCredentials];
    }

}
