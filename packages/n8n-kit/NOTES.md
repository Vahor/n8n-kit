
# Sync n8n-base-node

```bash
git submodule add https://github.com/n8n-io/n8n.git vendor/n8n
cd vendor/n8n
git sparse-checkout init --cone
git sparse-checkout set packages/nodes-base
```

refresh with `git submodule update --remote`



# TODO:

## Some nodes are really complex to parse, ex "SyncoMSPv1"

1. SyncroMSPv1 description is not set, so we have to check on "actions/versionDescription.ts"
2. In here we have spread operators with imports, so we have to resolve them
3. In customer/index.ts we also have spread operators with imports, so we again have to resolve them
4. if we take the import `import * as getAll from './getAll';` it point to an index with

```ts
import { customerGetAllDescription as description } from './description';
import { getAll as execute } from './execute';

export { description, execute };
```

named export with renamed import...

I stoped there.



it didn't take too long to test this way, I thing anotehr way would be to install n8n, create an instance of each node and print the description, then write everything as we did.

