import type { Type } from "arktype";
import {
	type SetV2NodeParameters,
	type,
	version,
} from "../generated/nodes/SetV2";
import type { IsNever } from "../utils/types";
import { ExpressionBuilder } from "../workflow";
import { Node, type NodeProps } from "./node";

export interface SetProps extends NodeProps {
	parameters: SetV2NodeParameters & {
		assignments?: Array<{
			id?: string;
			name: string;
			type: Type;
			value: ExpressionBuilder<any, any> | string;
		}>;
	};
}

type AssignementsToObject<
	T extends Array<{
		name: string;
		type: Type;
	}>,
> = {
	[K in keyof T]: T[K] extends {
		name: infer N extends string;
		type: infer T extends Type;
	}
		? {
				[K in N]: T["infer"];
			}
		: never;
};

export class Fields<L extends string, P extends SetProps> extends Node<
	L,
	IsNever<P["parameters"]["assignments"]> extends true
		? never
		: AssignementsToObject<NonNullable<P["parameters"]["assignments"]>>
> {
	protected override type = type;
	protected override typeVersion = version;

	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}

	override "~validate"(): void {
		super["~validate"]();
		// if mode is manual, then assignments are required
		if (this.props.parameters.mode === "manual") {
			const assignments = this.props.parameters.assignments;
			if (assignments == null) {
				throw new Error(`Mode is 'manual' but 'assignments' is undefined.`);
			}

			for (let i = 0; i < assignments.length; i++) {
				const assignment = assignments[i]!;
				assignment.id = `${this.getPath()}/${i}`;
				if (assignment.value instanceof ExpressionBuilder) {
					assignment.value = assignment.value.toExpression();
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
