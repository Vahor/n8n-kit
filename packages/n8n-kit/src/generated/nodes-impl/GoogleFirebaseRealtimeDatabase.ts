// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleFirebaseRealtimeDatabaseOAuth2ApiCredentials } from "../credentials/GoogleFirebaseRealtimeDatabaseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleFirebaseRealtimeDatabaseNodeParameters } from "../nodes/GoogleFirebaseRealtimeDatabase";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleFirebaseRealtimeDatabaseProps extends NodeProps {
    readonly parameters: GoogleFirebaseRealtimeDatabaseNodeParameters;
    readonly googleFirebaseRealtimeDatabaseOAuth2ApiCredentials?: Credentials<GoogleFirebaseRealtimeDatabaseOAuth2ApiCredentials>;
}

/**
 * Interact with Google Firebase - Realtime Database API
 */
export class GoogleFirebaseRealtimeDatabase<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleFirebaseRealtimeDatabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GoogleFirebaseRealtimeDatabaseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleFirebaseRealtimeDatabaseOAuth2ApiCredentials];
    }

}
