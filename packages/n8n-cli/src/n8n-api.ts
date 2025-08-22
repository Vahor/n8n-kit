import type { WorkflowDefinition } from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import { env } from "./env";

const urlEncode = (data: Record<string, string | string[]>) => {
	return new URLSearchParams(data).toString();
};

export class N8nApi {
	private apiKey: string;
	private baseUrl: string;

	constructor() {
		this.apiKey = env("N8N_API_KEY");
		this.baseUrl = env("N8N_BASE_URL");
	}

	private async request<T>(
		endpoint: `${string}`,
		options: RequestInit = {},
	): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`;
		logger.debug(`${options.method ?? "GET"} ${url}`);
		const response = await fetch(url, {
			...options,
			headers: {
				"X-N8N-API-KEY": this.apiKey,
				"Content-Type": "application/json",
				...options.headers,
			},
		});

		if (!response.ok) {
			logger.error(response.statusText);
			const responseBody = await response.text();
			logger.error(responseBody);

			if (options.body) {
				logger.debug(`Body:  ${JSON.stringify(options.body)}`);
			}
			throw new Error(
				`N8N API error: ${response.status} ${response.statusText}`,
			);
		}

		return response.json() as any;
	}

	async createWorkflow(
		input: Omit<WorkflowDefinition, "id" | "tags" | "active">,
	): Promise<WorkflowDefinition> {
		return this.request("/api/v1/workflows", {
			method: "POST",
			body: JSON.stringify(input),
		});
	}

	async updateWorkflow(
		id: string,
		input: Omit<WorkflowDefinition, "id" | "tags" | "active">,
	) {
		return this.request(`/api/v1/workflows/${id}`, {
			method: "PUT",
			body: JSON.stringify(input),
		});
	}

	async setActiveWorkflow(id: string, active: boolean) {
		const endpoint = active ? "activate" : "deactivate";
		return this.request(`/api/v1/workflows/${id}/${endpoint}`, {
			method: "POST",
		});
	}

	private async paginatedRequest<T>(
		endpoint: `${string}`,
		query: Record<string, string | string[]> = {},
		options: RequestInit = {},
	): Promise<T[]> {
		const fullData: T[] = [];
		let cursor: string | null = null;
		while (true) {
			if (cursor) {
				query.cursor = cursor;
			}
			const formattedEndpoint = `${endpoint}?${urlEncode(query)}`;
			const result = await this.request(formattedEndpoint, options);
			const { data, nextCursor } = result as {
				data: T[];
				nextCursor: string | null;
			};

			fullData.push(...data);
			cursor = nextCursor;

			if (!nextCursor) break;
		}
		return fullData;
	}

	async getTags(): Promise<{ id: string; name: string }[]> {
		return this.paginatedRequest("/api/v1/tags") as any;
	}

	async createTag(name: string): Promise<{ id: string }> {
		return this.request("/api/v1/tags", {
			method: "POST",
			body: JSON.stringify({ name }),
		});
	}

	async updateTags(id: string, tags: { id: string }[]) {
		return this.request(`/api/v1/workflows/${id}/tags`, {
			method: "PUT",
			body: JSON.stringify(tags),
		});
	}

	async listWorkflows(query: {
		active?: "true" | "false";
		tags?: string[];
		name?: string;
		projectId?: string;
	}): Promise<Array<WorkflowDefinition & { isArchived: boolean }>> {
		return this.paginatedRequest(`/api/v1/workflows`, query, {
			method: "GET",
		});
	}

	async getWorkflowById(id: string): Promise<WorkflowDefinition> {
		return this.request(`/api/v1/workflows/${id}`);
	}
}
