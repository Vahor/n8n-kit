// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GetResponseApiCredentials } from "../credentials/GetResponseApi.ts";
import type { GetResponseOAuth2ApiCredentials } from "../credentials/GetResponseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GetResponseNodeParameters } from "../nodes/GetResponse";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GetResponseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GetResponseNodeParameters;
    readonly getResponseApiCredentials?: Credentials<GetResponseApiCredentials>;
    readonly getResponseOAuth2ApiCredentials?: Credentials<GetResponseOAuth2ApiCredentials>;
}

/**
 * Consume GetResponse API
 */
export class GetResponse<L extends string, C extends IContext = never, P extends GetResponseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.getResponse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.getResponseApiCredentials, this.props?.getResponseOAuth2ApiCredentials];
    }

}
