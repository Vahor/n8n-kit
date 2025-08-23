// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MQTT/Mqtt.node.ts' node

export const description = "Push messages to MQTT" as const;
export const type = "n8n-nodes-base.mqtt" as const;
export const version = 1 as const;
export const credentials = [{"name":"mqtt","required":true,"testedBy":"mqttConnectionTest"}] as const;
export const outputs = {"main":"main"} as const;

export interface MqttNodeParameters {

    /**
     * The topic to publish to
     */
    readonly topic?: string;

    /**
     * Whether to send the data the node receives as JSON
     * Default: true
     */
    readonly sendInputData?: boolean;

    /**
     * The message to publish
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly options?: { "qos"?: "0" | "1" | "2", "retain"?: boolean };


}

