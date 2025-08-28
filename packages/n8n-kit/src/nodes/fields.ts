import type { Type } from "arktype";
import type { SetV2NodeParameters } from "../generated/nodes/SetV2";
import { SetV2 as _Fields } from "../generated/nodes-impl/SetV2";
import type { UnionToIntersection } from "../utils/types";
import { ExpressionBuilder } from "../workflow";
import type { NodeProps } from "./node";

type Assignment<T extends Type = Type> = {
	id?: string;
	name: string;
	type: T;
	// TODO: need to figure why infer is not working
	value: T["infer"] | ExpressionBuilder;
};

export interface SetProps<A extends readonly Assignment[]> extends NodeProps {
	parameters: Omit<SetV2NodeParameters, "assignments"> & {
		assignments: {
			assignments: A;
		};
	};
}

type AssignmentsToObject<T extends readonly { name: string; type: Type }[]> = {
	[K in keyof T]: T[K] extends {
		name: infer N extends string;
		type: infer T extends Type;
	}
		? { [K in N]: T["infer"] }
		: never;
}[number];

export class Fields<
	L extends string,
	const A extends readonly Assignment[],
	P extends SetProps<A>,
> extends _Fields<
	UnionToIntersection<
		AssignmentsToObject<P["parameters"]["assignments"]["assignments"]>
	>,
	L
> {
	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}

	override "~validate"(): void {
		super["~validate"]();
		// if mode is manual, then assignments are required
		if (
			this.props.parameters.mode === undefined ||
			this.props.parameters.mode === "manual"
		) {
			const assignments = this.props.parameters.assignments.assignments;
			if (assignments == null) {
				throw new Error(`Mode is 'manual' but 'assignments' is undefined.`);
			}

			for (let i = 0; i < assignments.length; i++) {
				const assignment = assignments[i]!;
				assignment.id = `${this.getPath()}/${i}`;
				if (assignment.value instanceof ExpressionBuilder) {
					assignment.value = assignment.value.toExpression();
				}

				const typeSchema = assignment.type.toJsonSchema();
				assignment.type = (typeSchema as any).type;
			}
		}

		if (this.props.parameters.mode === "raw") {
			if (this.props.parameters.fields == null) {
				throw new Error(`Mode is 'raw' but 'fields' is undefined.`);
			}

			throw new Error(`Raw mode is not supported yet.`);
		}
	}
}
