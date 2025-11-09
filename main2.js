// This still raises an oxlint error about missing extension after adding the foo import.
// This behavior is not correct because I have `ignorePackages` set to true, so it should be... ignored.
import { defineConfig } from "vitest/config";

import foo from "./foo.js";

export default defineConfig({});
