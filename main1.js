// This is a valid module, yet oxlint expects an extension.
// This behaviour does not exist in ESLint.
// We have `ignorePackages` set to true, so this should not error.
import { defineConfig } from "vitest/config";

export default defineConfig({});
