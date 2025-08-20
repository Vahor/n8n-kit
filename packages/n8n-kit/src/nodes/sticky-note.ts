import { NO_END_STATES } from "../workflow/chain/chain";
import type { INextable } from "../workflow/chain/types";
import { BaseNode, type NodePosition, type NodeProps } from "./node";

interface StickyNoteBaseProps {
	position: NodePosition;

	content: string;
	// TODO: should be optional, and auto-generated
	height: number;
	// TODO: should be optional, and auto-generated
	width: number;
}

export interface StickyNoteProps extends StickyNoteBaseProps, NodeProps {}

export class StickyNote extends BaseNode {
	public override endStates: INextable[] = NO_END_STATES;

	protected type = "n8n-nodes-base.stickyNote";
	protected typeVersion = 1;

	constructor(
		id: string,
		public readonly props: StickyNoteProps,
	) {
		super(id);
		this.position = props.position;
	}

	getParameters() {
		return {
			content: this.props.content,
			height: this.props.height,
			width: this.props.width,
		};
	}
}
