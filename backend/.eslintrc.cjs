module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: false,
                trailingComma: "all",
                arrowParens: "always",
                semi: false,
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        "import/parsers": {
            [require.resolve("@typescript-eslint/parser")]: [
                ".ts",
                ".tsx",
                ".d.ts",
            ],
        },
    },
}
