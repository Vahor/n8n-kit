import type { Type } from "arktype";
import type { NodejsFunction, PythonFunction } from "../bundler";
import type { BundledFunction } from "../bundler/function";
import type { CodeNodeParameters } from "../generated/nodes/Code";
import { Code as _Code } from "../generated/nodes-impl/Code";
import type { IsNever } from "../utils/types";
import type { NodeProps } from "./node";

export interface CodeProps extends NodeProps {
	/** {@inheritDoc OutputSchema} */
	outputSchema?: Type;
	parameters:
		| (Omit<CodeNodeParameters, "language" | "jsCode" | "pythonCode"> & {
				language?: "javaScript";
				jsCode: string | NodejsFunction;
				pythonCode?: never;
		  })
		| (Omit<CodeNodeParameters, "language" | "jsCode" | "pythonCode"> & {
				language: "python";
				pythonCode: string | PythonFunction;
				jsCode?: never;
		  });
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
		const { jsCode, pythonCode, ...rest } = this.props.parameters;
		let code: string | undefined;
		let key: "jsCode" | "pythonCode" | undefined;

		const getOrBundle = async (code: string | BundledFunction) =>
			typeof code === "string" ? code : await code.bundle();

		if (jsCode != null) {
			key = "jsCode";
			code = await getOrBundle(jsCode);
		} else if (pythonCode != null) {
			key = "pythonCode";
			code = await getOrBundle(pythonCode);
		}

		if (!code || !key)
			return rest as Omit<CodeNodeParameters, "jsCode" | "pythonCode"> & {
				jsCode?: string;
				pythonCode?: string;
			};

		return {
			...rest,
			[key]: code,
		};
	}
}
