import { Credentials } from "../credentials";
import { Workflow } from "../workflow";
import { ImportedWorkflow } from "../workflow/imported-workflow";

export class App {
	public readonly workflows: Workflow[] = [];
	public readonly credentials: Credentials[] = [];
	public readonly importedWorkflows: ImportedWorkflow[] = [];

	public add(thing: Workflow | Credentials | ImportedWorkflow): this {
		if (thing instanceof Workflow) {
			return this.addWorkflow(thing);
		}
		if (thing instanceof Credentials) {
			return this.addCredentials(thing);
		}
		if (thing instanceof ImportedWorkflow) {
			this.importedWorkflows.push(thing);
			return this;
		}
		throw new Error("Invalid thing");
	}

	private addCredentials(credentials: Credentials): this {
		if (this.credentials.find((c) => c.id === credentials.id)) {
			throw new Error(`Credentials with id ${credentials.id} already exists`);
		}
		this.credentials.push(credentials);
		return this;
	}

	private addWorkflow(workflow: Workflow): this {
		if (this.workflows.find((w) => w.id === workflow.id)) {
			throw new Error(`Workflow with id ${workflow.id} already exists`);
		}
		this.workflows.push(workflow);
		return this;
	}

	public "~validate"() {
		for (const workflow of this.workflows) {
			workflow["~validate"]();
		}
	}
}
