// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushcutApiCredentials } from "../credentials/PushcutApi.ts";
import type { Credentials } from "../../credentials";
import type { PushcutNodeParameters } from "../nodes/Pushcut";
import { Node, type NodeProps } from "../../nodes";

export interface PushcutProps extends NodeProps {

    readonly parameters: PushcutNodeParameters;
    readonly pushcutApiCredentials: Credentials<PushcutApiCredentials>;

}

export class Pushcut<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pushcut" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PushcutProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pushcutApiCredentials];

    }


}
