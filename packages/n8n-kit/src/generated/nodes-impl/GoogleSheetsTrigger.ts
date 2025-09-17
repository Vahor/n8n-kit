// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleSheetsTriggerOAuth2ApiCredentials } from "../credentials/GoogleSheetsTriggerOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleSheetsTriggerNodeParameters } from "../nodes/GoogleSheetsTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleSheetsTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleSheetsTriggerNodeParameters;
    readonly googleSheetsTriggerOAuth2ApiCredentials?: Credentials<GoogleSheetsTriggerOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Sheets events occur
 */
export class GoogleSheetsTrigger<L extends string, C extends IContext = never, P extends GoogleSheetsTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleSheetsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleSheetsTriggerOAuth2ApiCredentials];
    }

}
