// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RocketchatApiCredentials } from "../credentials/RocketchatApi.ts";
import type { Credentials } from "../../credentials";
import type { RocketchatNodeParameters } from "../nodes/Rocketchat";
import { Node, type NodeProps } from "../../nodes";

export interface RocketchatProps extends NodeProps, RocketchatNodeParameters {

    readonly rocketchatApiCredentials: Credentials<RocketchatApiCredentials>;

}

export class Rocketchat<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.rocketchat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RocketchatProps) {

        super(id, props);

    }

    override getParameters() {

        const { rocketchatApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.rocketchatApiCredentials];

    }


}

