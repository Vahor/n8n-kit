// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZoomApiCredentials } from "../credentials/ZoomApi.ts";
import type { ZoomOAuth2ApiCredentials } from "../credentials/ZoomOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZoomNodeParameters } from "../nodes/Zoom";
import { Node, type NodeProps } from "../../nodes/node";

export interface ZoomProps extends NodeProps {
    readonly parameters: ZoomNodeParameters;
    readonly zoomApiCredentials?: Credentials<ZoomApiCredentials>;
    readonly zoomOAuth2ApiCredentials?: Credentials<ZoomOAuth2ApiCredentials>;
}

/**
 * Consume Zoom API
 */
export class Zoom<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.zoom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ZoomProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zoomApiCredentials, this.props!.zoomOAuth2ApiCredentials];
    }

}
