// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutomizyApiCredentials } from "../credentials/AutomizyApi.ts";
import type { Credentials } from "../../credentials";
import type { AutomizyNodeParameters } from "../nodes/Automizy";
import { Node, type NodeProps } from "../../nodes";

export interface AutomizyProps extends NodeProps {

    readonly parameters: AutomizyNodeParameters;
    readonly automizyApiCredentials: Credentials<AutomizyApiCredentials>;

}

/**
 * Consume Automizy API
 */
export class Automizy<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.automizy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AutomizyProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.automizyApiCredentials];

    }


}
