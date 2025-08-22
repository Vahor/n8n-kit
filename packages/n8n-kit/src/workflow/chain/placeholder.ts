import { NO_END_STATES } from "./chain";
import { State } from "./state";
import type { INextable } from "./types";

/**
 * This "node" will be replaced by the actual node when the workflow is built.
 *
 * You can't call `next()` on it.
 *
 * Example:
 * ```ts
 * definition: [
 *		Chain.start(new NoOp("A")).next(new Placeholder("C")),
 *		Chain.start(new NoOp("B")).next(new NoOp("C")),
 * ]
 * ```
 *
 * This will result in:
 * ```
 *  A -> C
 *  B -> C
 * ```
 */
export class Placeholder<L extends string> extends State<L> {
	public override endStates: INextable[] = NO_END_STATES;

	constructor(id: L) {
		super(id);
	}
}
