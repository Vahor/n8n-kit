// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FigmaApiCredentials } from "../credentials/FigmaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FigmaTriggerNodeParameters } from "../nodes/FigmaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FigmaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FigmaTriggerNodeParameters;
    readonly figmaApiCredentials: Credentials<FigmaApiCredentials>;
}

/**
 * Starts the workflow when Figma events occur
 */
export class FigmaTrigger<L extends string, C extends IContext = never, P extends FigmaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.figmaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.figmaApiCredentials];
    }

}
