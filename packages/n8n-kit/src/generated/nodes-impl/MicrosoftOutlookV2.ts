// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOutlookV2NodeParameters } from "../nodes/MicrosoftOutlookV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftOutlookV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftOutlookV2NodeParameters;
    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Outlook API
 */
export class MicrosoftOutlookV2<L extends string, C extends IContext = never, P extends MicrosoftOutlookV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftOutlook" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftOutlookOAuth2ApiCredentials];
    }

}
