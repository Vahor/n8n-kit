def handler(input):
    if(input["type"] == "type1"):
        return {
            "prompt": f"Reply as if you were a gangster."
        }
    if(input["type"] == "type2"):
        return {
            "prompt": f"Reply as if you were a pirate."
        }

    raise Exception("Invalid type")

return handler({
  "type": _('@vahor/n8n-resolved_node_id@webhook').item.json.query.type
});