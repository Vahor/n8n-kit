// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MqttCredentials } from "../credentials/Mqtt.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MqttTriggerNodeParameters } from "../nodes/MqttTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MqttTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MqttTriggerNodeParameters;
    readonly mqttCredentials: Credentials<MqttCredentials>;
}

/**
 * Listens to MQTT events
 */
export class MqttTrigger<L extends string, C extends IContext = never, P extends MqttTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mqttTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mqttCredentials];
    }

}
