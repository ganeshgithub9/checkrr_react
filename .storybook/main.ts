// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react-webpack5';
//import { runtime } from 'webpack';
// import webpackConfig from '../webpack.config.js';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    // return {
    //   ...config,
    //   module: {
    //     ...config.module,
    //     rules: [...(config?.module?.rules || []), ...webpackConfig.module.rules]
    //   }
    config?.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-env'
            ]
          }
        }
      ]
    });
    config?.module?.rules?.push({
      test: /\.(png|svg|jpg|gif)$/, // we can use url-loader, @svgr/webpack instead of file-loader
      type: 'asset/resource',
      // generator: {
      //   filename: 'images/[name][ext]'
      // },
      exclude: /node_modules/
      //use: ['file-loader']
    });
    config.resolve?.extensions?.push('.ts', '.tsx');
    return config;
  }
};
//   }
// };

export default config;
