import { IfV2 as _If } from "../generated/nodes-impl/IfV2";
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
	conditions: Array<StringCondition>;
	combinator?: ConditionCombinator;
	options?: {
		ignoreCase?: boolean;
	};
}

// @ts-expect-error: we override the parameters type
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
		for (let i = 0; i < this.props.conditions.length; i++) {
			const condition = this.props.conditions[i]!;
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

	override getParameters() {
		return {
			conditions: {
				conditions: this.props.conditions,
				combinator: this.props.combinator ?? "and",
				options: {
					caseSensitive: this.props.options?.ignoreCase ?? true,
					version: 2,
					typeValidation: "strict",
				},
			},
		};
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
		return this as any;
	}
}
