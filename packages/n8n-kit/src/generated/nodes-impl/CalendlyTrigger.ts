// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CalendlyApiCredentials } from "../credentials/CalendlyApi.ts";
import type { CalendlyOAuth2ApiCredentials } from "../credentials/CalendlyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { CalendlyTriggerNodeParameters } from "../nodes/CalendlyTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CalendlyTriggerProps extends NodeProps, CalendlyTriggerNodeParameters {

    readonly calendlyApiCredentials?: Credentials<CalendlyApiCredentials>;
    readonly calendlyOAuth2ApiCredentials?: Credentials<CalendlyOAuth2ApiCredentials>;

}

export class CalendlyTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.calendlyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CalendlyTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<CalendlyTriggerNodeParameters, "calendlyApiCredentials | calendlyOAuth2ApiCredentials"> {

        const { calendlyApiCredentials:_0, calendlyOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.calendlyApiCredentials, this.props.calendlyOAuth2ApiCredentials];

    }


}

