// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Harvest/Harvest.node.ts' node

export const name = "harvest" as const;
export const description = "Access data on Harvest" as const;
export const version = 1 as const;

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
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "get" | "createByDuration" | "createByStartEnd" | "delete" | "deleteExternal" | "get" | "getAll" | "restartTime" | "stopTime" | "update" | "create" | "delete" | "get" | "getAll" | "me" | "update";

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
    readonly filters?: { "is_active"?: boolean, "updated_since"?: string } | { "client_id"?: string, "from"?: string, "state"?: string, "to"?: string, "updated_since"?: string, "page"?: number } | { "client_id"?: string, "from"?: string, "is_billed"?: boolean, "page"?: number, "project_id"?: string, "to"?: string, "updated_since"?: string, "user_id"?: string } | { "client_id"?: string, "from"?: string, "page"?: number, "project_id"?: string, "state"?: ("draft" | "open" | "paid" | "closed")[], "to"?: string, "updated_since"?: string } | { "client_id"?: string, "is_active"?: boolean, "page"?: number, "updated_since"?: string } | { "is_active"?: boolean, "page"?: number, "updated_since"?: string } | { "client_id"?: string, "from"?: string, "is_billed"?: boolean, "is_running"?: boolean, "page"?: number, "to"?: string, "updated_since"?: string, "user_id"?: string } | { "is_active"?: boolean, "updated_since"?: string, "page"?: number };

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
    readonly additionalFields?: { "address"?: string, "currency"?: string, "is_active"?: string } | { "email"?: string, "fax"?: string, "last_name"?: string, "phone_mobile"?: string, "phone_office"?: string, "title"?: string } | { "currency"?: string, "over_budget_notification_percentage"?: string, "issue_date"?: string, "notes"?: string, "number"?: string, "purchase_order"?: string, "subject"?: string, "tax"?: string, "tax2"?: string } | { "billable"?: boolean, "notes"?: string, "total_cost"?: string, "units"?: string, "user_id"?: boolean } | { "currency"?: string, "over_budget_notification_percentage"?: string, "ends_on"?: string, "estimate_id"?: string, "issue_date"?: string, "notes"?: string, "number"?: string, "payment_term"?: string, "purchase_order"?: string, "retainer_id"?: boolean, "subject"?: string, "tax"?: string, "tax2"?: string } | { "budget"?: number, "budget_is_monthly"?: boolean, "cost_budget"?: string, "cost_budget_include_expenses"?: boolean, "ends_on"?: string, "fee"?: string, "hourly_rate"?: string, "is_active"?: boolean, "is_fixed_fee"?: boolean, "notes"?: string, "notify_when_over_budget"?: boolean, "over_budget_notification_percentage"?: string, "show_budget_to_all"?: boolean, "starts_on"?: string } | { "billable_by_default"?: boolean, "default_hourly_rate"?: number, "is_active"?: boolean, "is_default"?: boolean } | { "hours"?: number, "notes"?: string, "user_id"?: string } | { "ended_time"?: string, "notes"?: string, "started_time"?: string, "user_id"?: string } | { "can_create_invoices"?: boolean, "can_create_projects"?: boolean, "can_see_rates"?: boolean, "cost_rate"?: number, "default_hourly_rate"?: string, "has_access_to_all_future_projects"?: boolean, "is_active"?: boolean, "is_admin"?: boolean, "is_contractor"?: boolean, "is_project_manager"?: boolean, "roles"?: string, "timezone"?: string, "weekly_capacity"?: number };

    /**
     * Default: {}
     */
    readonly updateFields?: { "address"?: string, "currency"?: string, "is_active"?: boolean, "name"?: string } | { "client_id"?: string, "email"?: string, "fax"?: string, "first_name"?: string, "last_name"?: string, "phone_mobile"?: string, "phone_office"?: string, "title"?: string } | { "client_id"?: string, "currency"?: string, "over_budget_notification_percentage"?: string, "issue_date"?: string, "number"?: string, "notes"?: string, "purchase_order"?: string, "subject"?: string, "tax"?: string, "tax2"?: string } | { "billable"?: boolean, "expense_category_id"?: string, "notes"?: string, "project_id"?: string, "spent_date"?: string, "total_cost"?: string, "units"?: string, "user_id"?: boolean } | { "client_id"?: string, "currency"?: string, "over_budget_notification_percentage"?: string, "ends_on"?: string, "estimate_id"?: string, "issue_date"?: string, "notes"?: string, "number"?: string, "payment_term"?: string, "purchase_order"?: string, "retainer_id"?: boolean, "subject"?: string, "tax"?: string, "tax2"?: string } | { "bill_by"?: "none" | "People" | "Project" | "Tasks", "budget"?: string, "budget_by"?: string, "budget_is_monthly"?: boolean, "client_id"?: string, "cost_budget"?: string, "cost_budget_include_expenses"?: boolean, "ends_on"?: string, "fee"?: string, "hourly_rate"?: string, "is_active"?: boolean, "is_billable"?: boolean, "is_fixed_fee"?: boolean, "name"?: string, "notes"?: string, "notify_when_over_budget"?: boolean, "over_budget_notification_percentage"?: string, "show_budget_to_all"?: boolean, "starts_on"?: string } | { "billable_by_default"?: boolean, "default_hourly_rate"?: number, "is_active"?: boolean, "is_default"?: boolean, "name"?: string } | { "ended_time"?: string, "hours"?: number, "notes"?: string, "started_time"?: string } | { "can_create_invoices"?: boolean, "can_create_projects"?: boolean, "can_see_rates"?: boolean, "cost_rate"?: number, "default_hourly_rate"?: string, "email"?: string, "first_name"?: string, "has_access_to_all_future_projects"?: boolean, "is_active"?: boolean, "is_admin"?: boolean, "is_contractor"?: boolean, "is_project_manager"?: boolean, "last_name"?: string, "roles"?: string, "timezone"?: string, "weekly_capacity"?: number };

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

