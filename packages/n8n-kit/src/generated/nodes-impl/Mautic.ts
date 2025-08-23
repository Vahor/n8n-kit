// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MauticApiCredentials } from "../credentials/MauticApi.ts";
import type { MauticOAuth2ApiCredentials } from "../credentials/MauticOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MauticNodeParameters } from "../nodes/Mautic";
import { Node, type NodeProps } from "../../nodes";

export interface MauticProps extends NodeProps, MauticNodeParameters {

    readonly mauticApiCredentials?: Credentials<MauticApiCredentials>;
    readonly mauticOAuth2ApiCredentials?: Credentials<MauticOAuth2ApiCredentials>;

}

export class Mautic<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mautic" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MauticProps) {

        super(id, props);

    }

    override getParameters() : Omit<MauticNodeParameters, "mauticApiCredentials | mauticOAuth2ApiCredentials"> {

        const { mauticApiCredentials:_0, mauticOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mauticApiCredentials, this.props.mauticOAuth2ApiCredentials];

    }


}

