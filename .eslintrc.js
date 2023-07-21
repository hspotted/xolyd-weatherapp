module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["prettier"],
  rules: {
    indent: ["error", 2],
    "prettier/prettier": [
      "error",
      {
        arrowParents: "avoid",
        bracketSpacing: true,
        endOfLine: "auto",
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        printWidth: 80,
        singleAttributePerLine: true,
        tabWidth: 2,
        trailingComma: "none",
        importOrder: [
          "<TYPES>",
          "",
          "^(react|next)$",
          "",
          "<THIRD_PARTY_MODULES>",
          "",
          "<BUILT_IN_MODULES>",
          "",
          "^[.]",
        ],
      },
    ],
  },
};
