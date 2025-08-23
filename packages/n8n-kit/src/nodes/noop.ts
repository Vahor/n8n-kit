import { NoOp as _NoOp, type NoOpProps } from "../generated/nodes-impl/NoOp";

// Remove the required properties
export class NoOp<L extends string> extends _NoOp<L> {
	constructor(id: L, props?: Omit<NoOpProps, "parameters">) {
		super(id, { parameters: {}, ...props });
	}
}
