// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleFirebaseCloudFirestoreOAuth2ApiCredentials } from "../credentials/GoogleFirebaseCloudFirestoreOAuth2Api.ts";
import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleFirebaseCloudFirestoreNodeParameters } from "../nodes/GoogleFirebaseCloudFirestore";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleFirebaseCloudFirestoreProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleFirebaseCloudFirestoreNodeParameters;
    readonly googleFirebaseCloudFirestoreOAuth2ApiCredentials?: Credentials<GoogleFirebaseCloudFirestoreOAuth2ApiCredentials>;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
}

/**
 * Interact with Google Firebase - Cloud Firestore API
 */
export class GoogleFirebaseCloudFirestore<L extends string, C extends IContext = never, P extends GoogleFirebaseCloudFirestoreProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleFirebaseCloudFirestore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleFirebaseCloudFirestoreOAuth2ApiCredentials, this.props?.googleApiCredentials];
    }

}
