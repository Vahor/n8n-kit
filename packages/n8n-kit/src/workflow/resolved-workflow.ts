import { RESOLVED_WORKFLOW_ID } from "./workflow";

export abstract class ResolvedWorkflow {
	// Undefined until we know the id
	private n8nWorkflowId: string | undefined = undefined;
	private hashId: string | undefined = undefined;

	public isResolved() {
		return this.n8nWorkflowId !== undefined;
	}
	public getN8nWorkflowId() {
		return this.n8nWorkflowId;
	}

	public setN8nWorkflowId(id: string) {
		if (this.isResolved()) {
			throw new Error("Workflow is already resolved");
		}
		this.n8nWorkflowId = id;
	}

	public getHashId() {
		return this.hashId;
	}

	public setHashId(id: string) {
		if (this.hashId !== undefined) {
			throw new Error("Workflow hashId is already set");
		}
		this.hashId = id;
	}

	public getInternalId() {
		return this.toWorkflowId();
	}

	public toWorkflowId() {
		if (!this.hashId && !this.n8nWorkflowId) {
			throw new Error("Workflow needs at least a hashId or a resolvedId");
		}

		if (!this.isResolved()) {
			return RESOLVED_WORKFLOW_ID(this.hashId!);
		}

		return this.n8nWorkflowId!;
	}
}
