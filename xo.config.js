export default {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-await-in-loop': 0,
		'import/extensions': 0,
		'@typescript-eslint/no-require-imports': 0,
		'import/no-anonymous-default-export': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: [
					'camelCase',
					'UPPER_CASE',
				],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'variable',
				types: [
					'boolean',
				],
				format: [
					'camelCase',
				],
			},
			{
				selector: 'typeLike',
				format: [
					'PascalCase',
				],
			},
		],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				allowList: {
					bin: true,
				},
			},
		],
		'no-alert': 0,
		'n/prefer-global/process': 0,
		'no-multiple-empty-lines': 0,
	},
};
