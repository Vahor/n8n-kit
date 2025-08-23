// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DriftApiCredentials } from "../credentials/DriftApi.ts";
import type { DriftOAuth2ApiCredentials } from "../credentials/DriftOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { DriftNodeParameters } from "../nodes/Drift";
import { Node, type NodeProps } from "../../nodes";

export interface DriftProps extends NodeProps, DriftNodeParameters {

    readonly driftApiCredentials?: Credentials<DriftApiCredentials>;
    readonly driftOAuth2ApiCredentials?: Credentials<DriftOAuth2ApiCredentials>;

}

export class Drift<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.drift" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: DriftProps) {

        super(id, props);

    }

    override getParameters() : Omit<DriftNodeParameters, "driftApiCredentials | driftOAuth2ApiCredentials"> {

        const { driftApiCredentials:_0, driftOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.driftApiCredentials, this.props.driftOAuth2ApiCredentials];

    }


}

