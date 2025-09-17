// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BambooHrApiCredentials } from "../credentials/BambooHrApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BambooHrNodeParameters } from "../nodes/BambooHr";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BambooHrProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BambooHrNodeParameters;
    readonly bambooHrApiCredentials: Credentials<BambooHrApiCredentials>;
}

/**
 * Consume BambooHR API
 */
export class BambooHr<L extends string, C extends IContext = never, P extends BambooHrProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.bambooHr" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.bambooHrApiCredentials];
    }

}
