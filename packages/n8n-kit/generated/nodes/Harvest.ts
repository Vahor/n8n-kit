// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Harvest/Harvest.node.ts' node

export const name = "harvest" as const;
export const description = "Access data on Harvest" as const;
export const version = 1 as const;
export const defaults = {"name":"Harvest"} as const;
export const credentials = [{"name":"harvestApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"harvestOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Access data on Harvest
 */
export interface HarvestNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "client" | "company" | "contact" | "estimate" | "expense" | "invoice" | "project" | "task" | "timeEntry" | "user";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "createByDuration" | "createByStartEnd" | "deleteExternal" | "restartTime" | "stopTime" | "me";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAccounts"}
     */
    readonly accountId: string;

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
     * Default: {}
     */
    readonly filters?: { "is_active"?: boolean, "updated_since"?: string, "client_id"?: string, "from"?: string, "state"?: string, "to"?: string, "page"?: number, "is_billed"?: boolean, "project_id"?: string, "user_id"?: string, "is_running"?: boolean };

    /**
     * The ID of the client you are retrieving
     */
    readonly id?: string;

    /**
     * The name of the client
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "address"?: string, "currency"?: string, "is_active"?: string, "email"?: string, "fax"?: string, "last_name"?: string, "phone_mobile"?: string, "phone_office"?: string, "title"?: string, "over_budget_notification_percentage"?: string, "issue_date"?: string, "notes"?: string, "number"?: string, "purchase_order"?: string, "subject"?: string, "tax"?: string, "tax2"?: string, "billable"?: boolean, "total_cost"?: string, "units"?: string, "user_id"?: boolean, "ends_on"?: string, "estimate_id"?: string, "payment_term"?: string, "retainer_id"?: boolean, "budget"?: number, "budget_is_monthly"?: boolean, "cost_budget"?: string, "cost_budget_include_expenses"?: boolean, "fee"?: string, "hourly_rate"?: string, "is_fixed_fee"?: boolean, "notify_when_over_budget"?: boolean, "show_budget_to_all"?: boolean, "starts_on"?: string, "billable_by_default"?: boolean, "default_hourly_rate"?: number, "is_default"?: boolean, "hours"?: number, "ended_time"?: string, "started_time"?: string, "can_create_invoices"?: boolean, "can_create_projects"?: boolean, "can_see_rates"?: boolean, "cost_rate"?: number, "has_access_to_all_future_projects"?: boolean, "is_admin"?: boolean, "is_contractor"?: boolean, "is_project_manager"?: boolean, "roles"?: string, "timezone"?: string, "weekly_capacity"?: number };

    /**
     * Default: {}
     */
    readonly updateFields?: { "address"?: string, "currency"?: string, "is_active"?: boolean, "name"?: string, "client_id"?: string, "email"?: string, "fax"?: string, "first_name"?: string, "last_name"?: string, "phone_mobile"?: string, "phone_office"?: string, "title"?: string, "over_budget_notification_percentage"?: string, "issue_date"?: string, "number"?: string, "notes"?: string, "purchase_order"?: string, "subject"?: string, "tax"?: string, "tax2"?: string, "billable"?: boolean, "expense_category_id"?: string, "project_id"?: string, "spent_date"?: string, "total_cost"?: string, "units"?: string, "user_id"?: boolean, "ends_on"?: string, "estimate_id"?: string, "payment_term"?: string, "retainer_id"?: boolean, "bill_by"?: "none" | "People" | "Project" | "Tasks", "budget"?: string, "budget_by"?: string, "budget_is_monthly"?: boolean, "cost_budget"?: string, "cost_budget_include_expenses"?: boolean, "fee"?: string, "hourly_rate"?: string, "is_billable"?: boolean, "is_fixed_fee"?: boolean, "notify_when_over_budget"?: boolean, "show_budget_to_all"?: boolean, "starts_on"?: string, "billable_by_default"?: boolean, "default_hourly_rate"?: number, "is_default"?: boolean, "ended_time"?: string, "hours"?: number, "started_time"?: string, "can_create_invoices"?: boolean, "can_create_projects"?: boolean, "can_see_rates"?: boolean, "cost_rate"?: number, "has_access_to_all_future_projects"?: boolean, "is_admin"?: boolean, "is_contractor"?: boolean, "is_project_manager"?: boolean, "roles"?: string, "timezone"?: string, "weekly_capacity"?: number };

    /**
     * The first name of the contact
     */
    readonly firstName?: string;

    /**
     * The ID of the client associated with this contact
     */
    readonly clientId?: string;

    /**
     * The ID of the project associated with this expense
     */
    readonly projectId?: string;

    /**
     * The ID of the expense category this expense is being tracked against
     */
    readonly expenseCategoryId?: string;

    /**
     * Date the expense occurred
     */
    readonly spentDate?: string;

    /**
     * Whether the project is billable or not
     * Default: true
     */
    readonly isBillable?: boolean;

    /**
     * The method by which the project is invoiced
     * Default: "none"
     */
    readonly billBy?: "none" | "People" | "Project" | "Tasks";

    /**
     * The email of the user or "none"
     * Default: "none"
     */
    readonly budgetBy?: string;

    /**
     * The ID of the task to associate with the time entry
     */
    readonly taskId?: string;

    /**
     * The last name of the user
     */
    readonly lastName?: string;

    /**
     * The email of the user
     */
    readonly email?: string;


}

