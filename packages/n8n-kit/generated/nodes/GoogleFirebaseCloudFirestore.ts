// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Firebase/CloudFirestore/GoogleFirebaseCloudFirestore.node.ts' node

export const name = "googleFirebaseCloudFirestore" as const;
export const description =
	"Interact with Google Firebase - Cloud Firestore API" as const;
export const version = 1.1 as const;
export const defaults = { name: "Google Cloud Firestore" } as const;
export const credentials = [
	{
		name: "googleFirebaseCloudFirestoreOAuth2Api",
		required: true,
		displayOptions: {
			show: { authentication: ["googleFirebaseCloudFirestoreOAuth2Api"] },
		},
	},
	{
		name: "googleApi",
		required: true,
		displayOptions: { show: { authentication: ["serviceAccount"] } },
	},
] as const;

/**
 * Interact with Google Firebase - Cloud Firestore API
 */
export interface GoogleFirebaseCloudFirestoreNodeParameters {
	/**
	 * Default: "googleFirebaseCloudFirestoreOAuth2Api"
	 */
	readonly authentication?:
		| "googleFirebaseCloudFirestoreOAuth2Api"
		| "serviceAccount";

	/**
	 * Default: "document"
	 */
	readonly resource?: "document" | "collection";
}
