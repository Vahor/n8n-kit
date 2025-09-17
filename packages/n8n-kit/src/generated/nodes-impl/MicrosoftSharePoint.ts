// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftSharePointOAuth2ApiCredentials } from "../credentials/MicrosoftSharePointOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftSharePointNodeParameters } from "../nodes/MicrosoftSharePoint";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftSharePointProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftSharePointNodeParameters;
    readonly microsoftSharePointOAuth2ApiCredentials: Credentials<MicrosoftSharePointOAuth2ApiCredentials>;
}

/**
 * Interact with Microsoft SharePoint API
 */
export class MicrosoftSharePoint<L extends string, C extends IContext = never, P extends MicrosoftSharePointProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftSharePoint" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftSharePointOAuth2ApiCredentials];
    }

}
