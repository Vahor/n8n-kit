import * as z from "zod/mini";

export const schema = z.object({
	action: z.enum(["create", "update", "delete"]),
	user_id: z.string().check(z.length(24)),
});
