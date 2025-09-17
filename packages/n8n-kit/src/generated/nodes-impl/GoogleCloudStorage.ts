// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCloudStorageOAuth2ApiCredentials } from "../credentials/GoogleCloudStorageOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleCloudStorageNodeParameters } from "../nodes/GoogleCloudStorage";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleCloudStorageProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleCloudStorageNodeParameters;
    readonly googleCloudStorageOAuth2ApiCredentials: Credentials<GoogleCloudStorageOAuth2ApiCredentials>;
}

/**
 * Use the Google Cloud Storage API
 */
export class GoogleCloudStorage<L extends string, C extends IContext = never, P extends GoogleCloudStorageProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleCloudStorage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleCloudStorageOAuth2ApiCredentials];
    }

}
