import { describe, expect, test } from "bun:test";
import { Code } from "../../src/nodes/code";

describe("Code node validation", () => {
	describe("python", () => {
		test("accepts pythonNative language with pythonCode", async () => {
			const node = new Code("test", {
				parameters: {
					language: "pythonNative",
					pythonCode: "print('hello world')",
				},
			});

			expect(() => node["~validate"]()).not.toThrow();

			const params = await node.getParameters();
			expect(params.language).toBe("pythonNative");
			expect(params.pythonCode).toBe("print('hello world')");
		});

		test("defaults to python when language not specified with pythonCode", async () => {
			const node = new Code("test", {
				parameters: {
					pythonCode: "print('hello world')",
				},
			});

			expect(() => node["~validate"]()).not.toThrow();

			const params = await node.getParameters();
			expect(params.language).toBe("pythonNative");
			expect(params.pythonCode).toBe("print('hello world')");
		});

		test("accepts python language with pythonCode", async () => {
			const node = new Code("test", {
				parameters: {
					language: "pythonNative",
					pythonCode: "print('hello world')",
				},
			});

			expect(() => node["~validate"]()).not.toThrow();

			const params = await node.getParameters();
			expect(params.language).toBe("pythonNative");
			expect(params.pythonCode).toBe("print('hello world')");
		});
	});

	describe("javaScript", () => {
		test("accepts javaScript language with jsCode", async () => {
			const node = new Code("test", {
				parameters: {
					language: "javaScript",
					jsCode: "console.log('hello')",
				},
			});

			expect(() => node["~validate"]()).not.toThrow();

			const params = await node.getParameters();
			// When language is explicitly set to javaScript, it's still included
			expect(params.language).toBe("javaScript");
			expect(params.jsCode).toBe("console.log('hello')");
		});

		test("accepts jsCode without explicit language (defaults to javaScript)", async () => {
			const node = new Code("test", {
				parameters: {
					jsCode: "console.log('hello')",
				},
			});

			expect(() => node["~validate"]()).not.toThrow();

			const params = await node.getParameters();
			expect(params.language).toBeUndefined(); // JavaScript is the default
			expect(params.jsCode).toBe("console.log('hello')");
		});
	});

	describe("validation errors", () => {
		test("throws error when parameters is missing", () => {
			// @ts-expect-error - Testing invalid configuration
			const node = new Code("test", {});

			expect(() => node["~validate"]()).toThrow(
				"Either 'jsCode' or 'pythonCode' must be provided.",
			);
		});

		test("throws error when neither jsCode nor pythonCode is provided", () => {
			const node = new Code("test", {
				// @ts-expect-error - Testing invalid configuration without code
				parameters: {},
			});

			expect(() => node["~validate"]()).toThrow(
				"Either 'jsCode' or 'pythonCode' must be provided.",
			);
		});

		test("throws error when both jsCode and pythonCode are provided", () => {
			const node = new Code("test", {
				// @ts-expect-error - Testing invalid configuration with both codes
				parameters: {
					jsCode: "console.log('hello')",
					pythonCode: "print('hello')",
				},
			});

			expect(() => node["~validate"]()).toThrow(
				"Only one of 'jsCode' or 'pythonCode' must be provided.",
			);
		});

		test("throws error when language is not javaScript but jsCode is provided", () => {
			const node = new Code("test", {
				// @ts-expect-error - Testing invalid configuration with wrong language
				parameters: {
					language: "pythonNative",
					jsCode: "console.log('hello')",
				},
			});

			expect(() => node["~validate"]()).toThrow(
				"Language must be 'javaScript' when 'jsCode' is provided.",
			);
		});

		test("throws error when language is not python/pythonNative but pythonCode is provided", () => {
			const node = new Code("test", {
				// @ts-expect-error - Testing invalid configuration with wrong language
				parameters: {
					language: "javaScript",
					pythonCode: "print('hello')",
				},
			});

			expect(() => node["~validate"]()).toThrow(
				"Language must be 'python' or 'pythonNative' when 'pythonCode' is provided.",
			);
		});
	});
});
