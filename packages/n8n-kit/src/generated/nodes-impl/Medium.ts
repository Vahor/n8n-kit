// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MediumApiCredentials } from "../credentials/MediumApi.ts";
import type { MediumOAuth2ApiCredentials } from "../credentials/MediumOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MediumNodeParameters } from "../nodes/Medium";
import { Node, type NodeProps } from "../../nodes";

export interface MediumProps extends NodeProps, MediumNodeParameters {

    readonly mediumApiCredentials?: Credentials<MediumApiCredentials>;
    readonly mediumOAuth2ApiCredentials?: Credentials<MediumOAuth2ApiCredentials>;

}

export class Medium<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.medium" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MediumProps) {

        super(id, props);

    }

    override getParameters() : Omit<MediumNodeParameters, "mediumApiCredentials | mediumOAuth2ApiCredentials"> {

        const { mediumApiCredentials:_0, mediumOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mediumApiCredentials, this.props.mediumOAuth2ApiCredentials];

    }


}
