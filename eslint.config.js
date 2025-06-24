import importPlugin from "eslint-plugin-import";

export default [
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      "import/extensions": ["error", "always", { ignorePackages: true }],
    },
  },
];
