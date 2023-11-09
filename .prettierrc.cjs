// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  // `require.resolve` is needed for e.g. `pnpm`
  plugins: [require.resolve('@prettier/plugin-pug')],

  pugSingleQuote: false,
  pugAttributeSeparator: 'none',
  pugSortAttributes: 'asc',
  pugFramework: 'vue',

  printWidth: 90,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  requirePragma: false,
  proseWrap: 'preserve',
  'prettier.eslintIntegration': false,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  singleAttributePerLine: false,
};
