// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MotorheadApiCredentials } from "../credentials/MotorheadApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryMotorheadNodeParameters } from "../nodes/MemoryMotorhead";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MemoryMotorheadProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MemoryMotorheadNodeParameters;
    readonly motorheadApiCredentials: Credentials<MotorheadApiCredentials>;
}

/**
 * Use Motorhead Memory
 */
export class MemoryMotorhead<L extends string, C extends IContext = never, P extends MemoryMotorheadProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.memoryMotorhead" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.motorheadApiCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
