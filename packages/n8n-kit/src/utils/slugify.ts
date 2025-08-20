import slugify from "slugify";

const internalIdentifiers = ["json", "~ids"];

export const slugifyIdentifier = (str: string) =>
	slugify(str, { lower: false, trim: true });

export const checkInternalIdentifier = (str: string) => {
	if (internalIdentifiers.includes(str.trim().toLowerCase())) {
		throw new Error(
			`Identifier '${str}' is used internally and cannot be used. List of internal identifiers: ${internalIdentifiers.join(
				", ",
			)}`,
		);
	}
};

export const validateIdentifier = <A extends string>(str: A): A => {
	checkInternalIdentifier(str);

	const slug = slugifyIdentifier(str);
	if (slug !== str) {
		throw new Error(
			`Identifier '${str}' is not valid, suggested identifier is '${slug}'`,
		);
	}
	return slug as A;
};
