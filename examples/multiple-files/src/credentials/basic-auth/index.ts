import { Credentials } from "@vahor/n8n-kit";

export const basicAuthCredentials = Credentials.byId({
	name: "httpBasicAuth",
	id: "some-basic-auth-id",
});
