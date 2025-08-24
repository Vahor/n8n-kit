import { Node, type NodeProps } from "../../nodes/node";
import { StickyNote, type StickyNoteProps } from "../../nodes/sticky-note";
import type { Chain, ChainContext, State } from "../chain";
import { GROUP_DEFAULT_POSITION } from "../layout";
import type { Workflow } from "../workflow";

interface GroupProps
	extends Omit<NodeProps, "parameters">,
		Omit<StickyNoteProps["parameters"], "width" | "height"> {
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
			position: GROUP_DEFAULT_POSITION,
			parameters: {
				..._props,
				// @ts-expect-error: remove filterNodes
				filterNodes: undefined,
				width: 0,
				height: 0,
			},
		});
		workflow.addToDynamicalyAddedNodes(this);
		this.endStates = [this];
	}

	override "~validate"(): void {
		const nodes = this.chain.toList();
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i]!;
			if (this._props.filterNodes?.(node, i) === false) continue;
			if (node instanceof Node) {
				node["~setGroup"](this.id);
			}
		}
	}
}
