// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CalendlyApiCredentials } from "../credentials/CalendlyApi.ts";
import type { CalendlyOAuth2ApiCredentials } from "../credentials/CalendlyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CalendlyTriggerNodeParameters } from "../nodes/CalendlyTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CalendlyTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CalendlyTriggerNodeParameters;
    readonly calendlyApiCredentials?: Credentials<CalendlyApiCredentials>;
    readonly calendlyOAuth2ApiCredentials?: Credentials<CalendlyOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Calendly events occur
 */
export class CalendlyTrigger<L extends string, C extends IContext = never, P extends CalendlyTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.calendlyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.calendlyApiCredentials, this.props?.calendlyOAuth2ApiCredentials];
    }

}
