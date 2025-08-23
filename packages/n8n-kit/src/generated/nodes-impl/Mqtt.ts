// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MqttCredentials } from "../credentials/Mqtt.ts";
import type { Credentials } from "../../credentials";
import type { MqttNodeParameters } from "../nodes/Mqtt";
import { Node, type NodeProps } from "../../nodes";

export interface MqttProps extends NodeProps, MqttNodeParameters {

    readonly mqttCredentials: Credentials<MqttCredentials>;

}

export class Mqtt<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mqtt" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MqttProps) {

        super(id, props);

    }

    override getParameters() : Omit<MqttNodeParameters, "mqttCredentials"> {

        const { mqttCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mqttCredentials];

    }


}

