Webhook endpoint that takes a `type` and `prompt` as query parameters

If `type` is `type1` then the python code says that the ai will be a gangster.
If `type` is `type2` then the python code says that the ai will be a pirate.

That result is then passed to anthropic and anthropic response is returned.

All typed

Example:
`https://n8n.domain.fr/webhook/path-to-webhook?type=type2&prompt=Hello%20World`

```json
{
  "message": "Ahoy, matey! Ye be callin' out to the vast expanse o' the digital seas, and I, the mighty pirate assistant, be here to respond! Yarr, 'tis a pleasure to make yer acquaintance. What adventure be ye seekin' on these virtual waters, me hearty?"
}
```

``https://n8n.domain.fr/webhook/path-to-webhook?type=type1&prompt=Hello%20World``

```json
{"message":"*clears throat and speaks in a gruff, Brooklyn accent* \"Yo, what's up, ya knucklehead? You callin' me out or what? This ain't no hello world, this is the real deal, capiche? You better watch your step, pal, 'cause I ain't playin' around here. This is my turf, and you best believe I run things around these parts. So why don't you pipe down and mind your own business before you get yourself into some real trouble, huh?\""}
```
