# TODO:

- Add more nodes (check if we can generate them)
- Add more examples (with screenshots)
- Add more tests ( and type tests)

- Add a way to place sticky note relative to another node

- Type '"inside group 2"' is not assignable to type '"When clicking ‘Test workflow’" | "inside group 1" | "inside group 1 - 2"'. Did you mean '"inside group 1"'? [2820]
in with-group example

## Tests to add:

- Propagate types for if nodes
- clone() method (check if test `can connect to if true/false nodes`, I had to implement clone for that)
   - In here build a workflow, check that the connection to something + end is not there.
- Example with start if -> two branches -> connects. We have an example with multiple but not if
