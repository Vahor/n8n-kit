// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Twilio/TwilioTrigger.node.ts' node

export const name = "twilioTrigger" as const;
export const description = "Starts the workflow on a Twilio update" as const;
export const version = 1 as const;
export const credentials = [{"name":"twilioApi","required":true}] as const;

/**
 * Starts the workflow on a Twilio update
 */
export interface TwilioTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly updates: ("com.twilio.messaging.inbound-message.received" | "com.twilio.voice.insights.call-summary.complete")[];

    /**
     */
    readonly callTriggerNotice?: string;


}

