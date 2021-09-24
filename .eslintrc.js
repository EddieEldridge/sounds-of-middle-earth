module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'react-hooks'
    ],
    ignorePatterns: ['dist/', 'scripts/', 'node_modules/', 'venv/'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'brace-style': ['error', '1tbs'],
        'camelcase': 'off',
        'curly': 'error',
        'dot-notation': 'off',
        'eol-last': 'error',
        'eslint-disable spaced-comment': 'off',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'import/no-duplicates': 'error',
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                ],
                'newlines-between': 'always'
            }
        ],
        'max-len': [
            'error',
            {
                code: 140,
                ignorePattern: '^import',
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true
            }
        ],
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': 'error',
        'no-empty-functions': 'off',
        'no-eval': 'error',
        'no-new': 'error',
        'no-new-wrappers': 'error',
        'no-restricted-imports': ['error', 'rxjs/Rx'],
        '@typescript-eslint/no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': ['error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'prefer-const': 'error',
        'quote-props': ['error', 'consistent-as-needed', { keywords: true }],
        'quotes': ['error', 'single'],
        'radix': 'error',
        'semi': ['error', 'always'],
        'space-before-blocks': ['error'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'ignore',
        }],
        'spaced-comment': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'no-multiple-empty-lines': ['error', {
            max: 2
        }],
        'padded-blocks': ['error', 'never']
    }
};
