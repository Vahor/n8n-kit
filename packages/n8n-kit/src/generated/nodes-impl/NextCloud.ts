// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NextCloudApiCredentials } from "../credentials/NextCloudApi.ts";
import type { NextCloudOAuth2ApiCredentials } from "../credentials/NextCloudOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NextCloudNodeParameters } from "../nodes/NextCloud";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NextCloudProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NextCloudNodeParameters;
    readonly nextCloudApiCredentials?: Credentials<NextCloudApiCredentials>;
    readonly nextCloudOAuth2ApiCredentials?: Credentials<NextCloudOAuth2ApiCredentials>;
}

/**
 * Access data on Nextcloud
 */
export class NextCloud<L extends string, C extends IContext = never, P extends NextCloudProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.nextCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.nextCloudApiCredentials, this.props?.nextCloudOAuth2ApiCredentials];
    }

}
