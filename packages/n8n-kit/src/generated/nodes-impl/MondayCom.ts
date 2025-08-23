// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MondayComApiCredentials } from "../credentials/MondayComApi.ts";
import type { MondayComOAuth2ApiCredentials } from "../credentials/MondayComOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MondayComNodeParameters } from "../nodes/MondayCom";
import { Node, type NodeProps } from "../../nodes";

export interface MondayComProps extends NodeProps, MondayComNodeParameters {

    readonly mondayComApiCredentials?: Credentials<MondayComApiCredentials>;
    readonly mondayComOAuth2ApiCredentials?: Credentials<MondayComOAuth2ApiCredentials>;

}

export class MondayCom<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mondayCom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MondayComProps) {

        super(id, props);

    }

    override getParameters() : Omit<MondayComNodeParameters, "mondayComApiCredentials | mondayComOAuth2ApiCredentials"> {

        const { mondayComApiCredentials:_0, mondayComOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mondayComApiCredentials, this.props.mondayComOAuth2ApiCredentials];

    }


}
