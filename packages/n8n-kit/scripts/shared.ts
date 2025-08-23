import type { INodeProperties, INodeTypeDescription } from "n8n-workflow";

export const mapPropertyType = (type: string) => {
	switch (type) {
		case "boolean":
			return "boolean";
		case "notice":
		case "dateTime":
		case "json":
		case "string":
			return "string";
		case "options":
			return "string";
		case "number":
			return "number";
	}
	return "any";
};

export const toTypescriptType = (
	property: INodeTypeDescription["properties"][number],
) => {
	switch (property.type) {
		case "options":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
					// @ts-expect-error: TODO: fix this
					.map((opt) => `"${opt.value}"`)
					.join(" | ");
				return values || "string";
			}
			return "string";

		case "multiOptions":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
					// @ts-expect-error: TODO: fix this
					.map((opt) => `"${opt.value}"`)
					.join(" | ");
				if (values) return `(${values})[]`;
			}
			return "any[]";

		case "fixedCollection":
			if (property.options && Array.isArray(property.options)) {
				let result = "{ ";
				for (const option of property.options) {
					result += `"${option.name}": any, `;
				}
				// Remove the last comma
				result = result.slice(0, -2);
				result += " }";
				return result;
			}

			return "Record<string, any>";

		case "collection":
			if (property.options && Array.isArray(property.options)) {
				let result = "{ ";

				const visitedProperties: Record<
					string,
					INodeProperties & {
						__versionsOfProperty: INodeProperties[];
					}
				> = {};
				for (const p of property.options) {
					if (visitedProperties[p.name]) {
						visitedProperties[p.name].__versionsOfProperty.push(
							p as INodeProperties,
						);
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
						...new Set(
							option.__versionsOfProperty.map((p) => toTypescriptType(p)),
						),
					].join(" | ");

					result += `"${option.name}"${option.required ? "" : "?"}: ${typeUnion}, `;
				}
				// Remove the last comma
				result = result.slice(0, -2);
				result += " }";
				return result;
			}
			return "any[]";

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

export const isLangChainNode = (nodePath: string) => {
	return nodePath.includes("@n8n/nodes-langchain");
};

export const getNodeName = (nodePath: string) => {
	return nodePath.split("/").pop()?.split(".")[0]!;
};
