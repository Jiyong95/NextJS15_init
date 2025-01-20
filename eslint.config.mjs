import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'], // TypeScript 파일에만 적용
    ignores: [
      'node_modules/**',
      '.next/**',
      'public/**',
      'build/**',
      'dist/**',
      '.cache/**',
      '**/*.test.{js,ts}',
      '**/__tests__/**',
      '**/jest.setup.js',
      'next.config.js',
      'next-env.d.ts',
    ],
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      // 기존 규칙
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      /**
       * 안 쓰는 import 제거
       * @docs https://github.com/sweepline/eslint-plugin-unused-imports#usage
       */
      // 사용되지 않는 변수 제거를 경고 대신 오류로 처리
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // import/order 규칙 추가
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // Node.js 모듈과 외부 모듈 그룹화
            ['internal'], // 내부 모듈
            ['parent', 'sibling', 'index'], // 상대 경로
          ],
          pathGroups: [
            {
              pattern: '{@constant/**,@hooks/**,@utils/**}',
              group: 'external',
              position: 'after',
            },
            //같은 group, position이라도 순서에 따라 우선 정렬.
            {
              pattern: '@repository/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{@atoms/**,@components/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './**.module.scss',
              group: 'index',
              position: 'after',
            },
          ],
          'newlines-between': 'always', // 그룹 간 줄바꿈
          alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순서로 정렬
        },
      ],
    },
  },
];

export default eslintConfig;
