# rollup-hashing-bug

When code is  modified in the `renderChunk` plugin hook, the file hash is not updated.

## Reproduction

1. run `npm i`
2. run `npm start`
3. verify that dist has the file `index-5d41ecfa.js`
4. uncomment line 17 in `rollup.config.js` so code is changed in the `renderChunk` hook
5. run `npm start`
6. verify that dist has the same file with the same hash, even when the code is different
