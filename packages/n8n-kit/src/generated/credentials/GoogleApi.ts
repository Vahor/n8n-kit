// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleApi.credentials.ts' credentials

export const name = "googleApi" as const;

/**
 * displayName: Google Service Account API
 * documentationUrl: google/service-account
 */
export interface GoogleApiCredentials {
    /**
     * The region where the Google Cloud service is located. This applies only to specific nodes, like the Google Vertex Chat Model
     * Default: "us-central1"
     */
    readonly "region"?: "africa-south1" | "asia-east1" | "asia-east2" | "asia-northeast1" | "asia-northeast2" | "asia-northeast3" | "asia-south1" | "asia-south2" | "asia-southeast1" | "asia-southeast2" | "australia-southeast1" | "australia-southeast2" | "europe-central2" | "europe-north1" | "europe-southwest1" | "europe-west1" | "europe-west10" | "europe-west12" | "europe-west2" | "europe-west3" | "europe-west4" | "europe-west6" | "europe-west8" | "europe-west9" | "me-central1" | "me-central2" | "me-west1" | "northamerica-northeast1" | "northamerica-northeast2" | "northamerica-south1" | "southamerica-east1" | "southamerica-west1" | "us-central1" | "us-east1" | "us-east4" | "us-east5" | "us-south1" | "us-west1" | "us-west2" | "us-west3" | "us-west4";

    /**
     * The Google Service account similar to user-808@project.iam.gserviceaccount.com
     */
    readonly "email": string;

    /**
     * Enter the private key located in the JSON file downloaded from Google Cloud Console
     * Type options: {"password":true}
     */
    readonly "privateKey": string;

    readonly "inpersonate"?: boolean;

    /**
     * The email address of the user for which the application is requesting delegated access
     */
    readonly "delegatedEmail"?: string;

    readonly "httpNode"?: boolean;

    readonly "httpWarning"?: string;

    /**
     * You can find the scopes for services <a href="https://developers.google.com/identity/protocols/oauth2/scopes" target="_blank">here</a>
     */
    readonly "scopes"?: string;

    readonly __name: "googleApi";
}
