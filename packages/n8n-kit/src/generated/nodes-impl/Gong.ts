// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GongApiCredentials } from "../credentials/GongApi.ts";
import type { GongOAuth2ApiCredentials } from "../credentials/GongOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GongNodeParameters } from "../nodes/Gong";
import { Node, type NodeProps } from "../../nodes";

export interface GongProps extends NodeProps {
    readonly parameters: GongNodeParameters;
    readonly gongApiCredentials?: Credentials<GongApiCredentials>;
    readonly gongOAuth2ApiCredentials?: Credentials<GongOAuth2ApiCredentials>;
}

/**
 * Interact with Gong API
 */
export class Gong<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.gong" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GongProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gongApiCredentials, this.props!.gongOAuth2ApiCredentials];
    }

}
