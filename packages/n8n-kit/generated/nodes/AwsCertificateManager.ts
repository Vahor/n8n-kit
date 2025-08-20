// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/CertificateManager/AwsCertificateManager.node.ts' node

export const name = "awsCertificateManager" as const;
export const description = "Sends data to AWS Certificate Manager" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Certificate Manager"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to AWS Certificate Manager
 */
export interface AwsCertificateManagerNodeParameters {

    /**
     * Default: "certificate"
     */
    readonly resource?: "certificate";


}

