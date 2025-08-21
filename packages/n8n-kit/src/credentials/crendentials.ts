import type { N8nCredentialsUnion } from "generated/credentials/index";
import { prefix } from "../constants";
import { shortHash, validateIdentifier } from "../utils/slugify";

type ByName<T extends N8nCredentialsUnion["__name"]> = Extract<
	N8nCredentialsUnion,
	{ __name: T }
>;

export class Credentials<N extends N8nCredentialsUnion = any> {
	public readonly id: string;
	public readonly hashId: string;

	public readonly name: N["__name"];

	public readonly "~N": N;

	// Undefined until we know the id
	public n8nCredentialsId: string | undefined = undefined;

	private constructor(id: string, name: N["__name"]) {
		this.id = validateIdentifier(id);
		this.hashId = shortHash(id);
		this.name = name;
	}

	public static byId<
		Name extends N8nCredentialsUnion["__name"],
		N extends ByName<Name>,
	>(id: string, props: { id: string; name: Name }) {
		const instance = new Credentials<N>(id, props.name as any);
		instance.n8nCredentialsId = props.id;
		return instance;
	}
}

export const credentials = (id: string) => `${prefix}${id}`;
