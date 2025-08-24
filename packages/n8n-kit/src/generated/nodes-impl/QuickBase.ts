// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuickBaseApiCredentials } from "../credentials/QuickBaseApi.ts";
import type { Credentials } from "../../credentials";
import type { QuickBaseNodeParameters } from "../nodes/QuickBase";
import { Node, type NodeProps } from "../../nodes/node";

export interface QuickBaseProps extends NodeProps {
    readonly parameters: QuickBaseNodeParameters;
    readonly quickbaseApiCredentials: Credentials<QuickBaseApiCredentials>;
}

/**
 * Integrate with the Quick Base RESTful API
 */
export class QuickBase<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.quickbase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: QuickBaseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.quickbaseApiCredentials];
    }

}
