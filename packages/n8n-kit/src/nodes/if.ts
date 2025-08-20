import { name, version } from "generated/nodes/IfV2";
import { Chain } from "../workflow/chain/chain";
import type { IChainable, INextable } from "../workflow/chain/types";
import { BaseNode, type NodeProps } from "./node";

type ConditionCombinator = "and" | "or";
type StringCondition = BaseCondition & {
	leftValue: string;
	rightValue?: string;
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
			| "isNotEmpty";
	};
};

type BaseCondition = {
	/* @internal */
	id?: string;
};

interface IfBaseProps {
	conditions: Array<StringCondition>;
	combinator?: ConditionCombinator;
	options?: {
		ignoreCase?: boolean;
	};
}

export interface IfProps extends IfBaseProps, NodeProps {}

export class If<L extends string> extends BaseNode<L> {
	protected override type = `n8n-nodes-base.${name}`;
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

	public true(next: IChainable) {
		super.addNext(next.startState);
		return this;
	}

	public false(next: IChainable) {
		super.addNext(next.startState);
		return this;
	}

	public afterwards(): Chain {
		return Chain.custom(this, this.endStates, this);
	}
}
