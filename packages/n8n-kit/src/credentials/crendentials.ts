import crypto from "node:crypto";
import { prefix } from "../constants";
import { shortHash, validateIdentifier } from "../utils/slugify";
import type { N8nCredentialsUnion } from "./generated";

export type CredentialsByName<T extends string> = Extract<
	N8nCredentialsUnion,
	{ __name: T }
>;

export class Credentials<N extends N8nCredentialsUnion = any> {
	public readonly id: string;
	public readonly hashId: string;

	public readonly type: N["__name"];

	public readonly "~N": N;

	// Undefined until we know the id
	public n8nCredentialsId: string | undefined = undefined;

	private constructor(id: string, type: N["__name"]) {
		this.id = validateIdentifier(id);
		this.hashId = shortHash(id);
		this.type = type;
	}

	public static byId<
		Name extends N8nCredentialsUnion["__name"],
		N extends CredentialsByName<Name>,
	>(props: { id: string; name: Name }) {
		const id = crypto.randomUUID();
		const instance = new Credentials<N>(id, props.name as any);
		instance.n8nCredentialsId = props.id;
		return instance;
	}
}

export const credentials = (id: string) => `${prefix}${id}`;
