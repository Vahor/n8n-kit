import {
	type StickyNoteNodeParameters,
	type,
	version,
} from "../generated/nodes/StickyNote";

import { NO_END_STATES } from "../workflow/chain/chain";
import type { INextable } from "../workflow/chain/types";
import { Node, type NodePosition, type NodeProps } from "./node";

export const StickyNoteColors = {
	YELLOW: 1,
	BROWN: 2,
	RED: 3,
	GREEN: 4,
	BLUE: 5,
	VIOLET: 6,
	GRAY: 7,
};

export interface StickyNoteProps extends NodeProps {
	position: NodePosition;

	parameters: Omit<StickyNoteNodeParameters, "color"> & {
		color?: keyof typeof StickyNoteColors;
	};
}

export class StickyNote extends Node {
	protected override endStates: INextable[] = NO_END_STATES;

	protected type = type;
	protected typeVersion = version;

	constructor(
		id: string,
		override props: StickyNoteProps,
	) {
		super(id, props);
		this.size = {
			width: props.parameters.width,
			height: props.parameters.height,
		};
		this.position = props.position;
	}

	override getParameters() {
		return {
			...this.props.parameters,
			height: this.size.height,
			width: this.size.width,

			color: this.props.parameters.color
				? StickyNoteColors[this.props.parameters.color]
				: undefined,
		};
	}
}
