// And then if I remove `.js` from the foo import below, this file still passes.
// This file should not pass, because the config is trying to require that the extension be included.
import { defineConfig } from "vitest/config";
// This should require an extension with the current config settings, but oxlint does not error here.
import foo from "./foo";

console.log(foo);

export default defineConfig({});
