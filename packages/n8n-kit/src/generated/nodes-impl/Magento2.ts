// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Magento2ApiCredentials } from "../credentials/Magento2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Magento2NodeParameters } from "../nodes/Magento2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface Magento2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: Magento2NodeParameters;
    readonly magento2ApiCredentials: Credentials<Magento2ApiCredentials>;
}

/**
 * Consume Magento API
 */
export class Magento2<L extends string, C extends IContext = never, P extends Magento2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.magento2" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.magento2ApiCredentials];
    }

}
