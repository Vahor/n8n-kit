import type { Workflow } from "../workflow";

export class App {
	public readonly workflows: Workflow[] = [];

	public add(workflow: Workflow): this {
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
