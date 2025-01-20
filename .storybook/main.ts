import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.module || !config.module.rules) {
      return config;
    }

    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === '...') {
          return rule;
        }

        //webpack에서 svg를 객체로 변환하는걸 무시
        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      // @svgr/webpack을 사용해 svg를 리액트컴포넌트로 변환
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
  staticDirs: ['../public'],
};
export default config;
