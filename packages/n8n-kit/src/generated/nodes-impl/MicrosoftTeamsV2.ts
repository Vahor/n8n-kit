// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftTeamsOAuth2ApiCredentials } from "../credentials/MicrosoftTeamsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftTeamsV2NodeParameters } from "../nodes/MicrosoftTeamsV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftTeamsV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftTeamsV2NodeParameters;
    readonly microsoftTeamsOAuth2ApiCredentials: Credentials<MicrosoftTeamsOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Teams API
 */
export class MicrosoftTeamsV2<L extends string, C extends IContext = never, P extends MicrosoftTeamsV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftTeams" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftTeamsOAuth2ApiCredentials];
    }

}
