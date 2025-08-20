// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MQTT/MqttTrigger.node.ts' node

export const name = "mqttTrigger" as const;
export const description = "Listens to MQTT events" as const;
export const version = 1 as const;
export const defaults = { name: "MQTT Trigger" } as const;
export const credentials = [{ name: "mqtt", required: true }] as const;

/**
 * Listens to MQTT events
 */
export interface MqttTriggerNodeParameters {
	/**
	 * Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2
	 */
	readonly topics?: string;

	/**
	 * Default: {}
	 */
	readonly options?: {
		jsonParseBody: boolean;
		onlyMessage: boolean;
		parallelProcessing: boolean;
	};
}
