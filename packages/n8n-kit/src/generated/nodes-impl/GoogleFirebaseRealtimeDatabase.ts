// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleFirebaseRealtimeDatabaseOAuth2ApiCredentials } from "../credentials/GoogleFirebaseRealtimeDatabaseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleFirebaseRealtimeDatabaseNodeParameters } from "../nodes/GoogleFirebaseRealtimeDatabase";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleFirebaseRealtimeDatabaseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleFirebaseRealtimeDatabaseNodeParameters;
    readonly googleFirebaseRealtimeDatabaseOAuth2ApiCredentials?: Credentials<GoogleFirebaseRealtimeDatabaseOAuth2ApiCredentials>;
}

/**
 * Interact with Google Firebase - Realtime Database API
 */
export class GoogleFirebaseRealtimeDatabase<L extends string, C extends IContext = never, P extends GoogleFirebaseRealtimeDatabaseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleFirebaseRealtimeDatabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleFirebaseRealtimeDatabaseOAuth2ApiCredentials];
    }

}
