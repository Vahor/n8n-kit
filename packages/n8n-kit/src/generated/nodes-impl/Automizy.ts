// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutomizyApiCredentials } from "../credentials/AutomizyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AutomizyNodeParameters } from "../nodes/Automizy";
import { Node, type NodeProps } from "../../nodes/node";

export interface AutomizyProps extends NodeProps {
    readonly parameters: AutomizyNodeParameters;
    readonly automizyApiCredentials: Credentials<AutomizyApiCredentials>;
}

/**
 * Consume Automizy API
 */
export class Automizy<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.automizy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AutomizyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.automizyApiCredentials];
    }

}
