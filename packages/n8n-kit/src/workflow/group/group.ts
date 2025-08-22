import { BaseNode, type StickyNoteProps } from "../../nodes";
import { StickyNote } from "../../nodes/sticky-note";
import type { Chain, ChainContext, State } from "../chain";
import { GROUP_DEFAULT_POSITION } from "../layout";
import type { Workflow } from "../workflow";

interface GroupProps
	extends Omit<StickyNoteProps, "position" | "width" | "height"> {
	filterNodes?: (node: State, index: number) => boolean;
}

export class Group<
	LiteralId extends string,
	C_CC extends ChainContext = {},
	C_Ids extends string[] = [],
> extends StickyNote {
	constructor(
		workflow: Workflow,
		id: LiteralId,
		public readonly _props: GroupProps,
		public readonly chain: Chain<C_CC, C_Ids>,
	) {
		super(id, {
			..._props,
			position: GROUP_DEFAULT_POSITION,
			width: 0,
			height: 0,
		});
		workflow.addUnlinkedNode(this);
	}

	override "~validate"(): void {
		const nodes = this.chain.toList();
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i]!;
			if (this._props.filterNodes?.(node, i) === false) continue;
			if (node instanceof BaseNode) {
				node["~setGroup"](this.id);
			}
		}
	}
}
