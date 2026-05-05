import type { CodeMaker } from "codemaker";
import type {
	INodeProperties,
	INodePropertyCollection,
	INodePropertyOptions,
	INodeTypeDescription,
} from "n8n-workflow";

export const mapPropertyType = (type: string) => {
	switch (type) {
		case "boolean":
			return "boolean";
		case "notice":
		case "dateTime":
		case "json":
		case "workflowSelector":
		case "color":
		case "string":
			return "string";
		case "credentialsSelect":
			return 'N8nCredentialsUnion["__name"]';
		case "options":
			return "string";
		case "number":
			return "number";
	}
	return "unknown";
};

export const toTypescriptType = (
	property: INodeTypeDescription["properties"][number],
) => {
	switch (property.type) {
		case "options":
			if (property.options && Array.isArray(property.options)) {
				const values = formatOptions(property.options).join(" | ");
				return values || "string";
			}
			return "string";

		case "multiOptions":
			if (property.options && Array.isArray(property.options)) {
				const values = formatOptions(property.options).join(" | ") || "string";
				return `(${values})[]`;
			}
			return "unknown[]";

		case "fixedCollection": {
			let result = "{ ";
			const isArray = property.typeOptions?.multipleValues === true;
			if (Array.isArray(property.options) && property.options.length > 0) {
				for (const option of property.options) {
					result += `${addQuotesToPropertyName(option.name)}: ${isArray ? "Array<" : ""}{ `;

					result += handleCollection(option.values).join(", ");

					result += " }";
					if (isArray) result += ">";
					result += ", ";
				}
				// remove last comma
				result = result.slice(0, -2);
			}
			result += " }";
			return result;
		}

		case "collection": {
			let result = "{ ";
			result += handleCollection(property?.options).join(", ");

			result += " }";
			return result;
		}

		case "resourceLocator":
			return `
{
	value: string,
	mode: ${property.modes!.map((mode) => `"${mode.name}"`).join(" | ")},
}`.trim();

		default:
			return mapPropertyType(property.type);
	}
};

const formatOptions = (
	options?: (
		| INodeProperties
		| INodePropertyOptions
		| INodePropertyCollection
	)[],
) => {
	if (!options || options.length === 0) return [];
	return options.map((opt) => {
		// @ts-expect-error: TODO: fix this
		const value = opt.value;
		if (typeof value === "string") {
			return `"${value.replaceAll('"', '\\"').replaceAll("\n", "\\n")}"`;
		}
		return value;
	});
};

const handleCollection = (
	options?: (
		| INodeProperties
		| INodePropertyOptions
		| INodePropertyCollection
	)[],
) => {
	const result: string[] = [];
	if (!options || options.length === 0) return result;

	const visitedProperties: Record<
		string,
		INodeProperties & {
			__versionsOfProperty: INodeProperties[];
		}
	> = {};
	for (const p of options) {
		if (visitedProperties[p.name]) {
			visitedProperties[p.name].__versionsOfProperty.push(p as INodeProperties);
			continue;
		}
		visitedProperties[p.name] = {
			...(p as INodeProperties),
			__versionsOfProperty: [p as INodeProperties],
		};
	}

	for (const option of Object.values(visitedProperties)) {
		// There will be duplicates but theses are ok (like "GET" | "GET")
		const typeUnion = [
			...new Set(option.__versionsOfProperty.map((p) => toTypescriptType(p))),
		].join(" | ");

		result.push(
			`${addQuotesToPropertyName(option.name)}${option.required ? "" : "?"}: ${typeUnion}`,
		);
	}
	return result;
};

export const isLangChainNode = (nodePath: string) => {
	return nodePath.includes("@n8n/nodes-langchain");
};

export const getNodeName = (nodePath: string) => {
	return nodePath.split("/").pop().split(".")[0]!;
};

export const validCustomType = [
	"ai_textSplitter",
	"ai_embedding",
	"ai_document",
	"ai_languageModel",
	"ai_memory",
	"ai_tool",
	"ai_vectorStore",
	"ai_outputParser",
];
export const validCustomTypeAsStringUnion = validCustomType
	.map((type) => `"${type}"`)
	.join(" | ");

export const renderComments = (code: CodeMaker, comments: string[]) => {
	if (comments.length > 0) {
		if (comments.length === 1) {
			code.line(`/** ${comments[0]} */`);
		} else {
			code.line(`/**`);
			for (const comment of comments) {
				code.line(` * ${comment}`);
			}
			code.line(` */`);
		}
	}
};

const validPropertyNameRegex = /^[a-z_]+[a-z0-9_]*$/i;
const addQuotesToPropertyName = (propertyName: string) => {
	if (!validPropertyNameRegex.test(propertyName)) {
		return `"${propertyName}"`;
	}
	return propertyName;
};
