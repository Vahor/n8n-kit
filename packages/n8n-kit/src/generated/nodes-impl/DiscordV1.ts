// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DiscordV1NodeParameters } from "../nodes/DiscordV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DiscordV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DiscordV1NodeParameters;
}

/**
 * Sends data to Discord
 */
export class DiscordV1<L extends string, C extends IContext = never, P extends DiscordV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.discord" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
