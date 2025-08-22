import { name, version } from "generated/nodes/StickyNote";

import { NO_END_STATES } from "../workflow/chain/chain";
import type { INextable } from "../workflow/chain/types";
import { BaseNode, type NodePosition, type NodeProps } from "./node";

export const StickyNoteColors = {
	YELLOW: 1,
	BROWN: 2,
	RED: 3,
	GREEN: 4,
	BLUE: 5,
	VIOLET: 6,
	GRAY: 7,
};

interface StickyNoteBaseProps {
	position: NodePosition;

	content: string;
	// TODO: should be optional, and auto-generated
	height: number;
	// TODO: should be optional, and auto-generated
	width: number;

	color?: keyof typeof StickyNoteColors;
}

export interface StickyNoteProps extends StickyNoteBaseProps, NodeProps {}

export class StickyNote extends BaseNode {
	public override endStates: INextable[] = NO_END_STATES;

	protected type = `n8n-nodes-base.${name}` as const;
	protected typeVersion = version;

	constructor(
		id: string,
		public readonly props: StickyNoteProps,
	) {
		super(id);
		this.size = {
			width: props.width,
			height: props.height,
		};
		this.position = props.position;
	}

	getParameters() {
		return {
			content: this.props.content,
			height: this.size.height,
			width: this.size.width,

			color: this.props.color ? StickyNoteColors[this.props.color] : 1,
		};
	}
}
