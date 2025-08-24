// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FigmaApiCredentials } from "../credentials/FigmaApi.ts";
import type { Credentials } from "../../credentials";
import type { FigmaTriggerNodeParameters } from "../nodes/FigmaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface FigmaTriggerProps extends NodeProps {
    readonly parameters: FigmaTriggerNodeParameters;
    readonly figmaApiCredentials: Credentials<FigmaApiCredentials>;
}

/**
 * Starts the workflow when Figma events occur
 */
export class FigmaTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.figmaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FigmaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.figmaApiCredentials];
    }

}
