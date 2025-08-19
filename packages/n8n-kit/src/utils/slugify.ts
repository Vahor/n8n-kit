import slugify from "slugify";

export const slugifyIdentifier = (str: string) =>
	slugify(str, { lower: true, trim: true });

export const validateIdentifier = <A extends string>(str: A): A => {
	const slug = slugifyIdentifier(str);
	if (slug !== str) {
		throw new Error(
			`Identifier '${str}' is not valid, suggested identifier is '${slug}'`,
		);
	}
	return slug as A;
};
