// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepLApiCredentials } from "../credentials/DeepLApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DeepLNodeParameters } from "../nodes/DeepL";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DeepLProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DeepLNodeParameters;
    readonly deepLApiCredentials: Credentials<DeepLApiCredentials>;
}

/**
 * Translate data using DeepL
 */
export class DeepL<L extends string, C extends IContext = never, P extends DeepLProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.deepL" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.deepLApiCredentials];
    }

}
