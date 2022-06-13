module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "prettier",
    // "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
};
