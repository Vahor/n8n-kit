import slugify from "slugify";

const internalIdentifiers = ["json"];

export const slugifyIdentifier = (str: string) =>
	slugify(str, { lower: false, trim: true });

export const validateIdentifier = <A extends string>(str: A): A => {
	if (internalIdentifiers.includes(str.trim().toLowerCase())) {
		throw new Error(
			`Identifier '${str}' is used internally and cannot be used. List of internal identifiers: ${internalIdentifiers.join(
				", ",
			)}`,
		);
	}
	const slug = slugifyIdentifier(str);
	if (slug !== str) {
		throw new Error(
			`Identifier '${str}' is not valid, suggested identifier is '${slug}'`,
		);
	}
	return slug as A;
};
