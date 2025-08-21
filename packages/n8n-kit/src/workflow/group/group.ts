import { name, version } from "generated/nodes/StickyNote";

import { BaseNode, Node, type StickyNoteProps } from "../../nodes";
import { StickyNoteColors } from "../../nodes/sticky-note";
import type { Chain, ChainContext } from "../chain";
import { GROUP_DEFAULT_POSITION } from "../layout";
import type { Workflow } from "../workflow";

export class Group<
	LiteralId extends string,
	C_CC extends ChainContext = {},
	C_Ids extends string[] = [],
> extends Node<LiteralId, {}> {
	protected type = `n8n-nodes-base.${name}`;
	protected typeVersion = version;

	constructor(
		workflow: Workflow | null,
		id: LiteralId,
		public readonly props: Omit<
			StickyNoteProps,
			"position" | "width" | "height"
		>,
		public readonly chain: Chain<C_CC, C_Ids>,
	) {
		super(id);
		this.position = GROUP_DEFAULT_POSITION;
		workflow?.addUnlinkedNode(this);
	}

	override "~validate"(): void {
		const nodes = this.chain.toList().slice(0, -1);
		for (const node of nodes) {
			if (node instanceof BaseNode) {
				node["~setGroup"](this.id);
			}
		}
	}

	override getParameters() {
		// TODO: check if we can extends from StickyNote
		return {
			content: this.props.content,
			height: this.size.height,
			width: this.size.width,
			color: this.props.color ? StickyNoteColors[this.props.color] : 1,
		};
	}
}
