import type { Type } from "arktype";
import type { NodejsFunction } from "../bundler";
import type { CodeNodeParameters } from "../generated/nodes/Code";
import { Code as _Code } from "../generated/nodes-impl/Code";
import type { IsNever } from "../utils/types";
import type { NodeProps } from "./node";

export interface CodeProps extends NodeProps {
	parameters: Omit<CodeNodeParameters, "jsCode"> & {
		jsCode?: string | NodejsFunction;
	};
	outputSchema?: Type;
}

// @ts-expect-error: we override the parameters type
export class Code<L extends string, P extends CodeProps> extends _Code<
	IsNever<P["outputSchema"]> extends true
		? never
		: NonNullable<P["outputSchema"]>["infer"],
	L
> {
	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props as any);
	}

	override "~validate"() {
		if (
			this.props.parameters.jsCode == null &&
			this.props.parameters.pythonCode == null
		) {
			throw new Error("Either 'jsCode' or 'pythonCode' must be provided.");
		}

		if (
			this.props.parameters.jsCode != null &&
			this.props.parameters.pythonCode != null
		) {
			throw new Error("Only one of 'jsCode' or 'pythonCode' must be provided.");
		}

		if (
			this.props.parameters.language &&
			this.props.parameters.language !== "javaScript" &&
			this.props.parameters.jsCode
		) {
			throw new Error(
				"Language must be 'javaScript' when 'jsCode' is provided.",
			);
		}

		if (
			this.props.parameters.language &&
			this.props.parameters.language !== "python" &&
			this.props.parameters.pythonCode
		) {
			throw new Error(
				"Language must be 'python' when 'pythonCode' is provided.",
			);
		}
	}

	override async getParameters() {
		const { jsCode, ...rest } = this.props.parameters;
		if (!jsCode) return rest;

		let jsCodeString: string;
		if (typeof jsCode === "string") {
			jsCodeString = jsCode;
		} else {
			jsCodeString = await jsCode.bundle();
		}

		return {
			...rest,
			jsCode: jsCodeString,
		};
	}
}
