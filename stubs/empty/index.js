const handler = {
	get: () => new Proxy(() => {}, handler),
	apply: () => new Proxy(() => {}, handler),
	construct: () => new Proxy(() => {}, handler),
};
export default handler;
