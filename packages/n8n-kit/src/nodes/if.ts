import { IfV2 as _If, type IfV2Props } from "../generated/nodes-impl/IfV2";
import type { ErrorMessage, IsNullable } from "../utils/types";
import { ExpressionBuilder } from "../workflow";
import type {
	AddIChainableToChainContext,
	AddNodeIdToIds,
	ChainContext,
} from "../workflow/chain/chain";
import type {
	ConnectionOptions,
	IChainable,
	IContext,
	INextable,
} from "../workflow/chain/types";
import type { NodeProps } from "./node";

type ConditionCombinator = "and" | "or";
type StringCondition = BaseCondition & {
	leftValue: ExpressionBuilder<any, any, string> | string;
	rightValue?: ExpressionBuilder<any, any, string> | string;
	operator: {
		type: "string";
		operation:
			| "exists"
			| "notExists"
			| "empty"
			| "notEmpty"
			| "equals"
			| "notEquals"
			| "contains"
			| "notContains"
			| "startsWith"
			| "notStartsWith"
			| "endsWith"
			| "notEndsWith"
			| "regex"
			| "notRegex";
	};
};

type NumberCondition = BaseCondition & {
	leftValue: ExpressionBuilder<any, any, number> | number;
	rightValue?: ExpressionBuilder<any, any, number> | number;
	operator: {
		type: "number";
		operation:
			| "exists"
			| "notExists"
			| "empty"
			| "notEmpty"
			| "equals"
			| "notEquals"
			| "gt"
			| "gte"
			| "lt"
			| "lte";
	};
};

type DateTimeCondition = BaseCondition & {
	leftValue: ExpressionBuilder<any, any, string> | string;
	rightValue?: ExpressionBuilder<any, any, string> | string;
	operator: {
		type: "dateTime";
		operation:
			| "exists"
			| "notExists"
			| "empty"
			| "notEmpty"
			| "equals"
			| "notEquals"
			| "after"
			| "afterOrEquals"
			| "before"
			| "beforeOrEquals";
	};
};

type BooleanCondition = BaseCondition & {
	leftValue: ExpressionBuilder<any, any, boolean> | boolean;
	rightValue?: ExpressionBuilder<any, any, boolean> | boolean;
	operator: {
		type: "boolean";
		operation:
			| "exists"
			| "notExists"
			| "empty"
			| "notEmpty"
			| "equals"
			| "notEquals"
			| "true"
			| "false";
	};
};

type ArrayCondition = BaseCondition & {
	leftValue: ExpressionBuilder<any, any, Array<any>> | Array<any>;
	rightValue?: ExpressionBuilder<any, any, any> | any;
	operator: {
		type: "array";
		operation:
			| "exists"
			| "notExists"
			| "empty"
			| "notEmpty"
			| "contains"
			| "notContains"
			| "lengthEquals"
			| "lengthNotEquals"
			| "lengthGt"
			| "lengthGte"
			| "lengthLt"
			| "lengthLte";
	};
};

type ObjectCondition = BaseCondition & {
	leftValue:
		| ExpressionBuilder<any, any, Record<string, any>>
		| Record<string, any>;
	rightValue?: never;
	operator: {
		type: "object";
		operation: "exists" | "notExists" | "empty" | "notEmpty";
	};
};

type BaseCondition = {
	/* @internal */
	id?: string;
	leftValue: unknown;
	rightValue?: unknown;
	operator: {
		type: unknown;
		operation: unknown;
		singleValue?: boolean;
	};
};

export interface IfProps extends NodeProps {
	parameters: Omit<IfV2Props["parameters"], "conditions"> & {
		conditions?: {
			conditions: Array<
				| StringCondition
				| NumberCondition
				| DateTimeCondition
				| BooleanCondition
				| ArrayCondition
				| ObjectCondition
			>;
			/** @default "and" */
			combinator?: ConditionCombinator;
		};
	};
}

export class If<
	L extends string,
	True extends IContext | null = null,
	False extends IContext | null = null,
	// Make If behave like a Chain
	CC extends ChainContext = {},
	IdsInContext extends string[] = [],
> extends _If<{}, L> {
	/** @internal */
	override endStates: INextable[] = [];

	constructor(
		id: L,
		override props: IfProps,
	) {
		super(id, props as any);
	}

	override "~validate"(): void {
		super["~validate"]();
		// add ids to conditions
		if (!this.props.parameters.conditions) return;
		// NOTE: n8n seems to accept up to 10 conditions, should we add a validation on our side ?

		for (
			let i = 0;
			i < this.props.parameters.conditions.conditions.length;
			i++
		) {
			const condition = this.props.parameters.conditions.conditions[i]!;
			condition.id = `${this.getPath()}/${i}`;
			condition.operator.singleValue = condition.rightValue === undefined;
			if (condition.leftValue instanceof ExpressionBuilder) {
				condition.leftValue = condition.leftValue.toExpression();
			}
			if (condition.rightValue instanceof ExpressionBuilder) {
				condition.rightValue = condition.rightValue.toExpression();
			}
		}
	}

	override async getParameters() {
		const conditions = this.props.parameters.conditions;

		return {
			looseTypeValidation: this.props.parameters.looseTypeValidation,
			options: this.props.parameters.options,
			conditions:
				conditions === undefined
					? undefined
					: {
							conditions: conditions.conditions,
							combinator: conditions.combinator ?? "and",
							options: {
								// TODO: check if this is correct, on n8n if we set ignoreCase to true it sets caseSensitive to true. Which seems incorrect
								caseSensitive:
									this.props.parameters.options?.ignoreCase ?? false,
								version: 2,
								typeValidation: "strict",
							},
						},
		};
	}

	/**
	 * Determines if this `If` node can accept additional input connections
	 * @returns True if less than 2 end states are connected (allowing one true/false branches)
	 */
	override canTakeInput(
		_fromState: IChainable,
		_withConnectionOptions?: ConnectionOptions,
	): boolean {
		// NOTE: this does not prevent calling twice the same method (true().true()), but it prevent calling it more that twice.
		return this.endStates.length < 2;
	}

	/**
	 * Connects a node or chain to execute when the `If` condition evaluates to true
	 * @param next - The node or chain to execute on true condition
	 * @param connectionOptions - Optional connection configuration (excluding 'from' which is set to 0)
	 * @returns Updated `If` node with the true branch configured
	 */
	public true<N extends IChainable>(
		next: IsNullable<True> extends true
			? N
			: ErrorMessage<"true() node is already set">,
		connectionOptions?: Omit<ConnectionOptions, "from">,
	): If<
		L,
		N["~context"],
		False,
		AddIChainableToChainContext<N, CC>,
		AddNodeIdToIds<N, IdsInContext>
	> {
		if (typeof next === "string") throw new Error(next);
		super.addNext(next.startState, { ...connectionOptions, from: 0 });
		this.endStates = [...this.endStates, next.endStates[0]].filter(
			Boolean,
		) as INextable[];
		return this as any;
	}

	/**
	 * Connects a node or chain to execute when the `If` condition evaluates to false
	 * @param next - The node or chain to execute on false condition
	 * @param connectionOptions - Optional connection configuration (excluding 'from' which is set to 1)
	 * @returns Updated `If` node with the false branch configured
	 */
	public false<N extends IChainable>(
		next: IsNullable<False> extends true
			? N
			: ErrorMessage<"false() node is already set">,
		connectionOptions?: Omit<ConnectionOptions, "from">,
	): If<
		L,
		True,
		N["~context"],
		AddIChainableToChainContext<N, CC>,
		AddNodeIdToIds<N, IdsInContext>
	> {
		if (typeof next === "string") throw new Error(next);
		super.addNext(next.startState, { ...connectionOptions, from: 1 });
		this.endStates = [...this.endStates, next.endStates[0]].filter(
			Boolean,
		) as INextable[];
		return this as any;
	}
}
