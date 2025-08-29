import crypto from "node:crypto";
import slugify from "slugify";

const internalIdentifiers = ["json", "chain"];

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

// TODO: add tests to check possible collisions
export function shortHash(text: string, length = 12) {
	const hash = crypto.createHash("sha256").update(text).digest("base64url");
	return hash.substring(0, length);
}
