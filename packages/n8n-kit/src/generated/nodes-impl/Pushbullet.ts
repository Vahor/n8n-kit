// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushbulletOAuth2ApiCredentials } from "../credentials/PushbulletOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PushbulletNodeParameters } from "../nodes/Pushbullet";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PushbulletProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PushbulletNodeParameters;
    readonly pushbulletOAuth2ApiCredentials: Credentials<PushbulletOAuth2ApiCredentials>;
}

/**
 * Consume Pushbullet API
 */
export class Pushbullet<L extends string, C extends IContext = never, P extends PushbulletProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pushbullet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.pushbulletOAuth2ApiCredentials];
    }

}
