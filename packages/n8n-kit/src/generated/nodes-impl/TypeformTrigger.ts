// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TypeformApiCredentials } from "../credentials/TypeformApi.ts";
import type { TypeformOAuth2ApiCredentials } from "../credentials/TypeformOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { TypeformTriggerNodeParameters } from "../nodes/TypeformTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TypeformTriggerProps extends NodeProps, TypeformTriggerNodeParameters {

    readonly typeformApiCredentials?: Credentials<TypeformApiCredentials>;
    readonly typeformOAuth2ApiCredentials?: Credentials<TypeformOAuth2ApiCredentials>;

}

export class TypeformTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.typeformTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: TypeformTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<TypeformTriggerNodeParameters, "typeformApiCredentials | typeformOAuth2ApiCredentials"> {

        const { typeformApiCredentials:_0, typeformOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.typeformApiCredentials, this.props?.typeformOAuth2ApiCredentials];

    }


}
