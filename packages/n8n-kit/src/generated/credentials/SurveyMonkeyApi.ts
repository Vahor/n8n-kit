// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SurveyMonkeyApi.credentials.ts' credentials

export const name = "surveyMonkeyApi" as const;

/**
 * displayName: SurveyMonkey API
 * documentationUrl: surveymonkey
 */
export interface SurveyMonkeyApiCredentials {
    /**
     * The access token must have the following scopes:
			<ul>
				<li>Create/modify webhooks</li>
				<li>View webhooks</li>
				<li>View surveys</li>
				<li>View collectors</li>
				<li>View responses</li>
				<li>View response details</li>
			</ul>
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    readonly "clientId"?: string;

    /** Type options: {"password":true} */
    readonly "clientSecret"?: string;

    readonly __name: "surveyMonkeyApi";
}
