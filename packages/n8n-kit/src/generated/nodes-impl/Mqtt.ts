// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MqttCredentials } from "../credentials/Mqtt.ts";
import type { Credentials } from "../../credentials";
import type { MqttNodeParameters } from "../nodes/Mqtt";
import { Node, type NodeProps } from "../../nodes/node";

export interface MqttProps extends NodeProps {
    readonly parameters: MqttNodeParameters;
    readonly mqttCredentials: Credentials<MqttCredentials>;
}

/**
 * Push messages to MQTT
 */
export class Mqtt<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.mqtt" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MqttProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mqttCredentials];
    }

}
