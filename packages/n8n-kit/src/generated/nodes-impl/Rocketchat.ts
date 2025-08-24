// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RocketchatApiCredentials } from "../credentials/RocketchatApi.ts";
import type { Credentials } from "../../credentials";
import type { RocketchatNodeParameters } from "../nodes/Rocketchat";
import { Node, type NodeProps } from "../../nodes/node";

export interface RocketchatProps extends NodeProps {
    readonly parameters: RocketchatNodeParameters;
    readonly rocketchatApiCredentials: Credentials<RocketchatApiCredentials>;
}

/**
 * Consume RocketChat API
 */
export class Rocketchat<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.rocketchat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RocketchatProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.rocketchatApiCredentials];
    }

}
