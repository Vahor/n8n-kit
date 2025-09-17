// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZoomApiCredentials } from "../credentials/ZoomApi.ts";
import type { ZoomOAuth2ApiCredentials } from "../credentials/ZoomOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZoomNodeParameters } from "../nodes/Zoom";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ZoomProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ZoomNodeParameters;
    readonly zoomApiCredentials?: Credentials<ZoomApiCredentials>;
    readonly zoomOAuth2ApiCredentials?: Credentials<ZoomOAuth2ApiCredentials>;
}

/**
 * Consume Zoom API
 */
export class Zoom<L extends string, C extends IContext = never, P extends ZoomProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.zoom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.zoomApiCredentials, this.props?.zoomOAuth2ApiCredentials];
    }

}
