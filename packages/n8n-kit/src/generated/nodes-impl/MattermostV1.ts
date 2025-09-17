// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MattermostApiCredentials } from "../credentials/MattermostApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MattermostV1NodeParameters } from "../nodes/MattermostV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MattermostV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MattermostV1NodeParameters;
    readonly mattermostApiCredentials: Credentials<MattermostApiCredentials>;
}

/**
 * Sends data to Mattermost
 */
export class MattermostV1<L extends string, C extends IContext = never, P extends MattermostV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mattermost" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mattermostApiCredentials];
    }

}
