import { MergeV3, type MergeV3Props } from "../generated/nodes-impl/MergeV3";

// A simple alias for MergeV3
export class Merge<L extends string> extends MergeV3<{}, L> {
	constructor(id: L, props: MergeV3Props) {
		super(id, props);
	}
}
