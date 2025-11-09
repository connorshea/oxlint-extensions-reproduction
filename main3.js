// This *passes* in oxlint when I add the _usage_ of the foo import here.
// ???
// This should all pass so this is _technically_ correct, but why does main2.js fail if this passes?
import { defineConfig } from "vitest/config";

import foo from "./foo.js";

console.log(foo());

export default defineConfig({});
