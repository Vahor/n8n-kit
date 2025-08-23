// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutomizyApiCredentials } from "../credentials/AutomizyApi.ts";
import type { Credentials } from "../../credentials";
import type { AutomizyNodeParameters } from "../nodes/Automizy";
import { Node, type NodeProps } from "../../nodes";

export interface AutomizyProps extends NodeProps, AutomizyNodeParameters {

    readonly automizyApiCredentials: Credentials<AutomizyApiCredentials>;

}

export class Automizy<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.automizy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AutomizyProps) {

        super(id, props);

    }

    override getParameters() : Omit<AutomizyNodeParameters, "automizyApiCredentials"> {

        const { automizyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.automizyApiCredentials];

    }


}
