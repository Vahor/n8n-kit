// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Ldap.credentials.ts' credentials

export const name = "ldap" as const;

/**
 * displayName: LDAP
 * documentationUrl: ldap
 */
export interface LdapCredentials {
    /**
     * IP or domain of the LDAP server
     */
    readonly "hostname": string;

    /**
     * Port used to connect to the LDAP server
     * Default: "389"
     */
    readonly "port"?: string;

    /**
     * Distinguished Name of the user to connect as
     */
    readonly "bindDN"?: string;

    /**
     * Password of the user provided in the Binding DN field above
     * Type options: {"password":true}
     */
    readonly "bindPassword"?: string;

    /**
     * Default: "none"
     */
    readonly "connectionSecurity"?: "none" | "tls" | "startTls";

    /**
     * Whether to connect even if SSL/TLS certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    /**
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly "caCertificate"?: string;

    /**
     * Optional connection timeout in seconds
     * Default: 300
     */
    readonly "timeout"?: number;

    readonly __name: "ldap";
}
