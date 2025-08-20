import { Chain } from "../workflow/chain/chain";
import type { IChainable, INextable } from "../workflow/chain/types";
import { BaseNode, type NodeProps } from "./node";

type IfBaseProps = {};

export interface IfProps extends IfBaseProps, NodeProps {}

export class If<L extends string> extends BaseNode<L> {
	protected override type = "n8n-nodes-base.if";
	protected override typeVersion = 2.2;

	public readonly endStates: INextable[] = [];

	override getParameters() {
		return {};
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
