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
	leftValue: ExpressionBuilder<any, any> | string;
	rightValue?: ExpressionBuilder<any, any> | string;
	operator: {
		type: "string";
		operation:
			| "contains"
			| "notContains"
			| "endsWith"
			| "notEndsWith"
			| "equal"
			| "notEqual"
			| "regex"
			| "notRegex"
			| "startsWith"
			| "notStartsWith"
			| "isEmpty"
			| "isNotEmpty"
			| "exists";
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
			conditions: Array<StringCondition>;
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
				conditions !== undefined
					? {
							conditions: conditions.conditions,
							combinator: conditions.combinator ?? "and",
							options: {
								caseSensitive:
									this.props.parameters.options?.ignoreCase ?? false,
								version: 2,
								typeValidation: "strict",
							},
						}
					: {},
		};
	}

	override canTakeInput(
		_fromState: IChainable,
		_withConnectionOptions?: ConnectionOptions,
	): boolean {
		// NOTE: this does not prevent calling twice the same method (true().true()), but it prevent calling it more that twice.
		return this.endStates.length < 2;
	}

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
