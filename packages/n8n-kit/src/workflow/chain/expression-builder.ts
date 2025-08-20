import type { JoinKeys, OmitRootLevel, TypeOfField } from "../../utils/types";
import type { ChainContext } from "./chain";
import { expr } from "./expression";

type ExtractNodeId<T extends string> =
	T extends `${infer NodeId}.${infer _Rest}` ? NodeId : never;

type ExtractPath<T extends string> = T extends `${infer _NodeId}.${infer Rest}`
	? Rest
	: never;

export class ExpressionBuilder<T extends ChainContext, Path extends string> {
	private readonly path: Path;

	constructor(path: Path) {
		this.path = path;
	}

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getType(): TypeOfField<Path, T> {
		return null as any;
	}

	public getFullPath(): Path {
		return this.path;
	}

	public getNodeId(): ExtractNodeId<Path> {
		const firstPart = this.path.split(".")[0];
		return firstPart as any;
	}

	public getPath(): ExtractPath<Path> {
		const rest = this.path.split(".").slice(1).join(".");
		if (rest.length === 0) {
			throw new Error("Invalid path for expression");
		}
		return rest as any;
	}

	public format() {
		const nodeId = this.getNodeId();
		if (nodeId === "json") {
			return `$json.${this.getPath()}`;
		}
		return `$('${nodeId}').${this.getPath()}`;
	}

	/**
	 * return ={{ format() }}
	 */
	public toExpression() {
		return expr`${this}`;
	}
}

export function $$<T extends ChainContext>() {
	return <Path extends OmitRootLevel<JoinKeys<T>>>(
		path: Path,
	): ExpressionBuilder<T, Path> => new ExpressionBuilder<T, Path>(path);
}

export type ExpressionBuilderProvider<CC extends ChainContext> = ReturnType<
	typeof $$<CC>
>;
