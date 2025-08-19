import slugify from "slugify";

export const slugifyIdentifier = (str: string) =>
	slugify(str, { lower: true, trim: true });
