// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOutlookTriggerNodeParameters } from "../nodes/MicrosoftOutlookTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftOutlookTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftOutlookTriggerNodeParameters;
    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;
}

/**
 * Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals.
 */
export class MicrosoftOutlookTrigger<L extends string, C extends IContext = never, P extends MicrosoftOutlookTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftOutlookTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftOutlookOAuth2ApiCredentials];
    }

}
