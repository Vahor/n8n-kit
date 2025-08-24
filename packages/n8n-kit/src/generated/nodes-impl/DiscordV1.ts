// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DiscordV1NodeParameters } from "../nodes/DiscordV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface DiscordV1Props extends NodeProps {
    readonly parameters: DiscordV1NodeParameters;
}

/**
 * Sends data to Discord
 */
export class DiscordV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.discord" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DiscordV1Props) {
        super(id, props);
    }

}
