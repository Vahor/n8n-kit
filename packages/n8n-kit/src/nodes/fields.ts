import type { Type } from "arktype";
import type { SetV2NodeParameters } from "../generated/nodes/SetV2";
import { SetV2 as _Fields } from "../generated/nodes-impl/SetV2";
import type { UnionToIntersection } from "../utils/types";
import {
	type ExpressionBuilder,
	type ExpressionOrValue,
	resolveExpressionValue,
} from "../workflow";
import type { NodeProps } from "./node";

type Assignment<T extends Type = Type> = {
	id?: string;
	name: string;
	type: T;
	// TODO: need to figure why infer is not working
	value: ExpressionOrValue<T["infer"]>;
};

export interface SetProps<A extends readonly Assignment[]> extends NodeProps {
	parameters: Omit<SetV2NodeParameters, "assignments"> & {
		assignments: {
			assignments: A;
		};
	};
}

type IsValidValue<T extends Type, V> = V extends ExpressionBuilder<
	any,
	any,
	infer VType
>
	? VType extends T["infer"]
		? true
		: false
	: V extends T["infer"]
		? true
		: false;

type AssignmentsToObject<T extends readonly Assignment[]> = {
	[K in keyof T]: T[K] extends {
		name: infer N extends string;
		type: infer T extends Type;
		value: infer V;
	}
		? {
				[K in N]: IsValidValue<T, V> extends true ? T["infer"] : never;
			}
		: never;
}[number];

// @ts-expect-error: we override the type
export class Fields<
	L extends string,
	const A extends readonly Assignment[],
	P extends SetProps<A>,
> extends _Fields<
	L,
	UnionToIntersection<
		AssignmentsToObject<P["parameters"]["assignments"]["assignments"]>
	>
> {
	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props as any);
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
				assignment.value = resolveExpressionValue(assignment.value);
				if (typeof assignment.type !== "string") {
					// transform arktype type to "string" | "object" ... to match n8n
					const typeSchema = assignment.type.toJsonSchema();
					assignment.type = (typeSchema as any).type;
				}
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
