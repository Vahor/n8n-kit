// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushbulletOAuth2ApiCredentials } from "../credentials/PushbulletOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { PushbulletNodeParameters } from "../nodes/Pushbullet";
import { Node, type NodeProps } from "../../nodes";

export interface PushbulletProps extends NodeProps {

    readonly parameters: PushbulletNodeParameters;
    readonly pushbulletOAuth2ApiCredentials: Credentials<PushbulletOAuth2ApiCredentials>;

}

export class Pushbullet<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pushbullet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PushbulletProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pushbulletOAuth2ApiCredentials];

    }


}
