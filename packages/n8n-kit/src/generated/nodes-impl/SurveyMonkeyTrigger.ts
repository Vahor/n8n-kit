// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SurveyMonkeyApiCredentials } from "../credentials/SurveyMonkeyApi.ts";
import type { SurveyMonkeyOAuth2ApiCredentials } from "../credentials/SurveyMonkeyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SurveyMonkeyTriggerNodeParameters } from "../nodes/SurveyMonkeyTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SurveyMonkeyTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SurveyMonkeyTriggerNodeParameters;
    readonly surveyMonkeyApiCredentials?: Credentials<SurveyMonkeyApiCredentials>;
    readonly surveyMonkeyOAuth2ApiCredentials?: Credentials<SurveyMonkeyOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Survey Monkey events occur
 */
export class SurveyMonkeyTrigger<L extends string, C extends IContext = never, P extends SurveyMonkeyTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.surveyMonkeyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.surveyMonkeyApiCredentials, this.props?.surveyMonkeyOAuth2ApiCredentials];
    }

}
