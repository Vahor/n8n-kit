// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Elastic/Elasticsearch/Elasticsearch.node.ts' node

export const name = "elasticsearch" as const;
export const description = "Consume the Elasticsearch API" as const;
export const version = 1 as const;
export const defaults = { name: "Elasticsearch" } as const;
export const credentials = [
	{ name: "elasticsearchApi", required: true },
] as const;

/**
 * Consume the Elasticsearch API
 */
export interface ElasticsearchNodeParameters {
	/**
	 * Default: "document"
	 */
	readonly resource?: "document" | "index";
}
