// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOneDriveTriggerNodeParameters } from "../nodes/MicrosoftOneDriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftOneDriveTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftOneDriveTriggerNodeParameters;
    readonly microsoftOneDriveOAuth2ApiCredentials: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;
}

/**
 * Trigger for Microsoft OneDrive API.
 */
export class MicrosoftOneDriveTrigger<L extends string, C extends IContext = never, P extends MicrosoftOneDriveTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftOneDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftOneDriveOAuth2ApiCredentials];
    }

}
