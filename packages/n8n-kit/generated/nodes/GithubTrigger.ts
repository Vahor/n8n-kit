// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Github/GithubTrigger.node.ts' node

export const name = "githubTrigger" as const;
export const description = "Starts the workflow when Github events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Github Trigger"} as const;
export const credentials = [{"name":"githubApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"githubOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Starts the workflow when Github events occur
 */
export interface GithubTriggerNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly owner: any;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly repository: any;

    /**
     * The events to listen to
     * Default: []
     */
    readonly events: ("*" | "check_run" | "check_suite" | "commit_comment" | "create" | "delete" | "deploy_key" | "deployment" | "deployment_status" | "fork" | "github_app_authorization" | "gollum" | "installation" | "installation_repositories" | "issue_comment" | "issues" | "label" | "marketplace_purchase" | "member" | "membership" | "meta" | "milestone" | "org_block" | "organization" | "page_build" | "project" | "project_card" | "project_column" | "public" | "pull_request" | "pull_request_review" | "pull_request_review_comment" | "push" | "release" | "repository" | "repository_import" | "repository_vulnerability_alert" | "security_advisory" | "star" | "status" | "team" | "team_add" | "watch")[];

    /**
     * Default: {}
     */
    readonly options?: { "insecureSSL"?: boolean };


}

