// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoToWebinarOAuth2ApiCredentials } from "../credentials/GoToWebinarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoToWebinarNodeParameters } from "../nodes/GoToWebinar";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoToWebinarProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoToWebinarNodeParameters;
    readonly goToWebinarOAuth2ApiCredentials: Credentials<GoToWebinarOAuth2ApiCredentials>;
}

/**
 * Consume the GoToWebinar API
 */
export class GoToWebinar<L extends string, C extends IContext = never, P extends GoToWebinarProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.goToWebinar" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.goToWebinarOAuth2ApiCredentials];
    }

}
