// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GristApiCredentials } from "../credentials/GristApi.ts";
import type { Credentials } from "../../credentials";
import type { GristNodeParameters } from "../nodes/Grist";
import { Node, type NodeProps } from "../../nodes";

export interface GristProps extends NodeProps {

    readonly parameters: GristNodeParameters;
    readonly gristApiCredentials: Credentials<GristApiCredentials>;

}

/**
 * Consume the Grist API
 */
export class Grist<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.grist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GristProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.gristApiCredentials];

    }


}
