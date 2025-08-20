// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Ldap/Ldap.node.ts' node

export const name = "ldap" as const;
export const description = "Interact with LDAP servers" as const;
export const version = 1 as const;
export const defaults = { name: "LDAP" } as const;
export const credentials = [
	{ name: "ldap", required: true, testedBy: "ldapConnectionTest" },
] as const;

/**
 * Interact with LDAP servers
 */
export interface LdapNodeParameters {
	/**
	 * Default: "search"
	 */
	readonly operation?:
		| "compare"
		| "create"
		| "delete"
		| "rename"
		| "search"
		| "update";

	/**
	 */
	readonly nodeDebug?: boolean;
}
