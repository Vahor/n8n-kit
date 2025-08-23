// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SurveyMonkeyApiCredentials } from "../credentials/SurveyMonkeyApi.ts";
import type { SurveyMonkeyOAuth2ApiCredentials } from "../credentials/SurveyMonkeyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { SurveyMonkeyTriggerNodeParameters } from "../nodes/SurveyMonkeyTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SurveyMonkeyTriggerProps extends NodeProps, SurveyMonkeyTriggerNodeParameters {

    readonly surveyMonkeyApiCredentials?: Credentials<SurveyMonkeyApiCredentials>;
    readonly surveyMonkeyOAuth2ApiCredentials?: Credentials<SurveyMonkeyOAuth2ApiCredentials>;

}

export class SurveyMonkeyTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.surveyMonkeyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SurveyMonkeyTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { surveyMonkeyApiCredentials:_0, surveyMonkeyOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.surveyMonkeyApiCredentials, this.props.surveyMonkeyOAuth2ApiCredentials];

    }


}

