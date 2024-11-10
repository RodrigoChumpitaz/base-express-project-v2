module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "prettier/prettier": ["error", { printWidth: 120 }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "linebreak-style": 0,
  },
  plugins: ["import", "prettier"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
};
