module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "es5",
				bracketSpacing: true,
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prefer-rest-params": "off",
		"no-prototype-builtins": "off",
		"no-empty": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/camelcase": "off", //驼峰命名关
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				mocha: true,
			},
		},
	],
};
