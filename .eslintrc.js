module.exports = {
	root: true,
	extends: '@react-native',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js'],
			rules: {
				'react-native/no-inline-styles': 'off',
				semi: ['off'],
				'comma-dangle': [
					'error',
					{
						arrays: 'never',
						objects: 'never',
						imports: 'never',
						exports: 'never',
						functions: 'never'
					}
				],
				'@typescript-eslint/no-shadow': ['error'],
				'prettier/prettier': [
					'error',
					{ 'comma-dangle': ['error', 'always-multiline'] }
				],
				// 'prettier/prettier': 'off',
				'no-shadow': 'off',
				'no-undef': 'off',
				'react-hooks/exhaustive-deps': 'off',
				'react/react-in-jsx-scope': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						argsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^_'
					}
				]
			}
		}
	]
}
