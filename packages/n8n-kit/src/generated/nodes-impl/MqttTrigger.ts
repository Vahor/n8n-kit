// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MqttCredentials } from "../credentials/Mqtt.ts";
import type { Credentials } from "../../credentials";
import type { MqttTriggerNodeParameters } from "../nodes/MqttTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface MqttTriggerProps extends NodeProps, MqttTriggerNodeParameters {

    readonly mqttCredentials: Credentials<MqttCredentials>;

}

export class MqttTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mqttTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MqttTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<MqttTriggerNodeParameters, "mqttCredentials"> {

        const { mqttCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mqttCredentials];

    }


}

