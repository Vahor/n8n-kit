// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepLApiCredentials } from "../credentials/DeepLApi.ts";
import type { Credentials } from "../../credentials";
import type { DeepLNodeParameters } from "../nodes/DeepL";
import { Node, type NodeProps } from "../../nodes/node";

export interface DeepLProps extends NodeProps {
    readonly parameters: DeepLNodeParameters;
    readonly deepLApiCredentials: Credentials<DeepLApiCredentials>;
}

/**
 * Translate data using DeepL
 */
export class DeepL<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.deepL" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DeepLProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.deepLApiCredentials];
    }

}
