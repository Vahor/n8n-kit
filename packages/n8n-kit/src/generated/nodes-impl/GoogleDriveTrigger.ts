// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDriveOAuth2ApiCredentials } from "../credentials/GoogleDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleDriveTriggerNodeParameters } from "../nodes/GoogleDriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleDriveTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleDriveTriggerNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDriveOAuth2ApiCredentials?: Credentials<GoogleDriveOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Drive events occur
 */
export class GoogleDriveTrigger<L extends string, C extends IContext = never, P extends GoogleDriveTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.googleDriveOAuth2ApiCredentials];
    }

}
