import { version } from "../generated/nodes/IfV2";
import type { IsNullable } from "../utils/types";
import { ExpressionBuilder } from "../workflow";
import { Chain } from "../workflow/chain/chain";
import type {
	ConnectionOptions,
	IChainable,
	IContext,
	INextable,
} from "../workflow/chain/types";
import { BaseNode, type NodeProps } from "./node";

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

interface IfBaseProps {
	conditions: Array<StringCondition>;
	combinator?: ConditionCombinator;
	options?: {
		ignoreCase?: boolean;
	};
}

export interface IfProps extends IfBaseProps, NodeProps {}

type trueAlreayUsedError = "true() is already used";
type falseAlreayUsedError = "false() is already used";

export class If<
	L extends string,
	True extends IContext | null = null,
	False extends IContext | null = null,
> extends BaseNode<L> {
	protected override type = `n8n-nodes-base.if` as const;
	protected override typeVersion = version;

	public readonly endStates: INextable[] = [];

	constructor(
		id: L,
		public readonly props: IfProps,
	) {
		super(id, props);
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

	public true<C extends IContext>(
		next: IsNullable<True> extends true
			? IChainable<any, C>
			: trueAlreayUsedError,
		connectionOptions?: Omit<ConnectionOptions, "from">,
	): If<L, C, False> {
		if (typeof next === "string") throw new Error(next);
		super.addNext(next.startState, { ...connectionOptions, from: 0 });
		return this as any;
	}

	public false<C extends IContext>(
		next: IsNullable<False> extends true
			? IChainable<any, C>
			: falseAlreayUsedError,
		connectionOptions?: Omit<ConnectionOptions, "from">,
	): If<L, True, C> {
		if (typeof next === "string") throw new Error(next);
		super.addNext(next.startState, { ...connectionOptions, from: 1 });
		return this as any;
	}

	public afterwards(): Chain {
		return Chain.custom(this, this.endStates, this);
	}
}
