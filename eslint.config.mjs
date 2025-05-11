// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierEslint from 'eslint-config-prettier/flat';

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  prettierEslint,
  {
    files: ['**/*.js'],
    extends: [tsEslint.configs.disableTypeChecked],
  }
);
