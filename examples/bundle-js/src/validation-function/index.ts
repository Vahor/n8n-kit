import * as z from "zod/mini";

const schema = z.object({
	action: z.enum(["create", "update", "delete"]),
	user_id: z.string().check(z.length(24)),
});

type Input = {
	action: string;
	user_id: string;
};

export const handler = (input: Input) => {
	return schema.safeParse({
		action: input.action,
		user_id: input.user_id,
	});
};
