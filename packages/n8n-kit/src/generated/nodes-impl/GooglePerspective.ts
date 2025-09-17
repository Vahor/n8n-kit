// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePerspectiveOAuth2ApiCredentials } from "../credentials/GooglePerspectiveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GooglePerspectiveNodeParameters } from "../nodes/GooglePerspective";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GooglePerspectiveProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GooglePerspectiveNodeParameters;
    readonly googlePerspectiveOAuth2ApiCredentials: Credentials<GooglePerspectiveOAuth2ApiCredentials>;
}

/**
 * Consume Google Perspective API
 */
export class GooglePerspective<L extends string, C extends IContext = never, P extends GooglePerspectiveProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googlePerspective" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googlePerspectiveOAuth2ApiCredentials];
    }

}
