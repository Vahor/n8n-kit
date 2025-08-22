// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SecurityScorecard/SecurityScorecard.node.ts' node

export const name = "securityScorecard" as const;
export const description = "Consume SecurityScorecard API" as const;
export const version = 1 as const;

/**
 * Consume SecurityScorecard API
 */
export interface SecurityScorecardNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource: "company" | "industry" | "invite" | "portfolio" | "portfolioCompany" | "report";

    /**
     * Default: "getFactor"
     */
    readonly operation?: "getFactor" | "getFactorHistorical" | "getHistoricalScore" | "getScorecard" | "getScorePlan" | "getFactor" | "getFactorHistorical" | "getScore" | "create" | "create" | "delete" | "getAll" | "update" | "add" | "getAll" | "remove" | "download" | "generate" | "getAll";

    /**
     * Primary identifier of a company or scorecard, i.e. domain.
     */
    readonly scorecardIdentifier?: string;

    /**
     * Score target
     */
    readonly score?: number;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "severity"?: string, "severity_in"?: string } | { "grade"?: string, "industry"?: string, "issueType"?: string, "status"?: "active" | "inactive", "vulnerability"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "date_from"?: string, "date_to"?: string, "timing"?: "daily" | "weekly" | "monthly" } | { "from"?: string, "to"?: string } | { "format"?: "csv" | "pdf" } | { "countries"?: string, "format"?: "csv" | "pdf", "ips"?: string, "subdomains"?: string };

    /**
     * Default: "food"
     */
    readonly industry?: "food" | "healthcare" | "manofacturing" | "retail" | "technology";

    /**
     */
    readonly email?: string;

    /**
     */
    readonly firstName?: string;

    /**
     */
    readonly lastName?: string;

    /**
     * Message for the invitee
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "days_to_resolve_issue"?: number, "domain"?: string, "grade_to_maintain"?: string, "is_organization_point_of_contact"?: boolean, "issue_desc"?: string, "issue_title"?: string, "issue_type"?: string, "sendme_copy"?: boolean, "target_url"?: string };

    /**
     */
    readonly portfolioId?: string;

    /**
     * Name of the portfolio
     */
    readonly name?: string;

    /**
     */
    readonly description?: string;

    /**
     * Default: "shared"
     */
    readonly privacy?: "private" | "shared" | "team";

    /**
     * Company's domain name
     */
    readonly domain?: string;

    /**
     * Default: "detailed"
     */
    readonly report?: "detailed" | "events-json" | "issues" | "partnership" | "summary" | "full-scorecard-json" | "portfolio" | "scorecard-footprint";

    /**
     * Default: "securityscorecard"
     */
    readonly branding?: "securityscorecard" | "company_and_securityscorecard" | "company";

    /**
     */
    readonly date?: string;

    /**
     * URL to a generated report
     */
    readonly url?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;


}

