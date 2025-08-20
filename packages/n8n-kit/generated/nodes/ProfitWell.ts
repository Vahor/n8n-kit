// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ProfitWell/ProfitWell.node.ts' node

export const name = "profitWell" as const;
export const description = "Consume ProfitWell API" as const;
export const version = 1 as const;
export const defaults = {"name":"ProfitWell"} as const;
export const credentials = [{"name":"profitWellApi","required":true}] as const

/**
 * Consume ProfitWell API
 */
export interface ProfitWellNodeParameters {

    /**
     * Default: "metric"
     */
    readonly resource?: "company" | "metric";

    /**
     * Default: "getSetting"
     */
    readonly operation?: "getSetting" | "get";

    /**
     */
    readonly type?: "daily" | "monthly";

    /**
     * Can only be the current or previous month. Format should be YYYY-MM.
     */
    readonly month?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "plan_id"?: string, "dailyMetrics"?: ("active_customers" | "churned_customers" | "churned_recurring_revenue" | "cumulative_net_new_mrr" | "cumulative_new_trialing_customers" | "downgraded_customers" | "downgraded_recurring_revenue" | "future_churn_mrr" | "new_customers" | "new_recurring_revenue" | "reactivated_customers" | "reactivated_recurring_revenue" | "recurring_revenue" | "upgraded_customers" | "upgraded_recurring_revenue")[], "monthlyMetrics"?: ("active_customers" | "active_trialing_customers" | "average_revenue_per_user" | "churned_customers" | "churned_customers_cancellations" | "churned_customers_delinquent" | "churned_recurring_revenue" | "churned_recurring_revenue_cancellations" | "churned_recurring_revenue_delinquent" | "churned_trialing_customers" | "converted_customers" | "converted_recurring_revenue" | "customers_churn_cancellations_rate" | "customers_churn_delinquent_rate" | "customers_churn_rate" | "customer_conversion_rate" | "customers_retention_rate" | "downgraded_customers" | "downgrade_rate" | "downgraded_recurring_revenue" | "existing_customers" | "existing_recurring_revenue" | "existing_trialing_customers" | "growth_rate" | "lifetime_value" | "new_customers" | "new_recurring_revenue" | "new_trialing_customers" | "plan_change_rate" | "plan_changed_recurring_revenue" | "reactivated_customers" | "reactivated_recurring_revenue" | "recurring_revenue" | "revenue_churn_cancellations_rate" | "revenue_churn_delinquent_rate" | "revenue_churn_rate" | "revenue_retention_rate" | "upgrade_rate" | "upgraded_customers" | "upgraded_recurring_revenue")[] };


}

