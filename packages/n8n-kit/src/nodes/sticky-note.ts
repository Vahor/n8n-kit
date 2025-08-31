import type { StickyNoteNodeParameters } from "../generated/nodes/StickyNote";
import { StickyNote as _StickyNote } from "../generated/nodes-impl/StickyNote";
import { NO_END_STATES } from "../workflow/chain/chain";
import type { INextable } from "../workflow/chain/types";
import type { NodePosition, NodeProps } from "./node";

const StickyNoteColors = {
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

// @ts-expect-error: we override the parameters type
export class StickyNote<L extends string> extends _StickyNote<{}, L> {
	/** @internal */
	override endStates: INextable[] = NO_END_STATES;

	constructor(
		id: L,
		override props: StickyNoteProps,
	) {
		super(id, props as any);
		this.size = {
			width: props.parameters.width,
			height: props.parameters.height,
		};
		this.position = props.position;
	}

	override async getParameters() {
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
