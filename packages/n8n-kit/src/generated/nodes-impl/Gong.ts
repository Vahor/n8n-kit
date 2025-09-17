// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GongApiCredentials } from "../credentials/GongApi.ts";
import type { GongOAuth2ApiCredentials } from "../credentials/GongOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GongNodeParameters } from "../nodes/Gong";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GongProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GongNodeParameters;
    readonly gongApiCredentials?: Credentials<GongApiCredentials>;
    readonly gongOAuth2ApiCredentials?: Credentials<GongOAuth2ApiCredentials>;
}

/**
 * Interact with Gong API
 */
export class Gong<L extends string, C extends IContext = never, P extends GongProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gong" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.gongApiCredentials, this.props?.gongOAuth2ApiCredentials];
    }

}
