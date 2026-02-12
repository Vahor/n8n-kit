import type { NodejsFunction, PythonFunction } from "../bundler";
import type { BundledFunction } from "../bundler/function";
import type { CodeNodeParameters } from "../generated/nodes/Code";
import {
	Code as _Code,
	type CodeProps as _CodeProps,
} from "../generated/nodes-impl/Code";

export interface CodeProps extends Omit<_CodeProps, "parameters"> {
	parameters:
		| (Omit<CodeNodeParameters, "language" | "jsCode" | "pythonCode"> & {
				language?: "javaScript";
				jsCode: string | NodejsFunction;
				pythonCode?: never;
		  })
		| (Omit<CodeNodeParameters, "language" | "jsCode" | "pythonCode"> & {
				language?: "pythonNative";
				pythonCode: string | PythonFunction;
				jsCode?: never;
		  });
}

export class Code<L extends string, P extends CodeProps> extends _Code<
	L,
	never,
	// @ts-expect-error: we override the type
	P
> {
	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}

	override "~validate"() {
		if (
			this.props.parameters?.jsCode == null &&
			this.props.parameters?.pythonCode == null
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
			this.props.parameters.language !== "pythonNative" &&
			this.props.parameters.pythonCode
		) {
			throw new Error(
				"Language must be 'pythonNative' when 'pythonCode' is provided.",
			);
		}
	}

	override async getParameters(): Promise<CodeNodeParameters> {
		const { jsCode, pythonCode, ...rest } = this.props.parameters;
		let code: string | undefined;
		let key: "jsCode" | "pythonCode" | undefined;
		let language: "javaScript" | "pythonNative" | undefined;

		const getOrBundle = async (code: string | BundledFunction) =>
			typeof code === "string" ? code : await code.bundle();

		if (jsCode != null) {
			key = "jsCode";
			// leade undefined as it's the default value
			// language = "javaScript";
			code = await getOrBundle(jsCode);
		} else if (pythonCode != null) {
			key = "pythonCode";
			language = "pythonNative";
			code = await getOrBundle(pythonCode);
		}

		if (!code || !key)
			return rest as Omit<CodeNodeParameters, "jsCode" | "pythonCode"> & {
				jsCode?: string;
				pythonCode?: string;
			};

		return {
			language,
			...rest,
			[key]: code,
		};
	}
}
