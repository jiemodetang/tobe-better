import { defineConfig } from 'umi';

export default defineConfig({
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  polyfill: {
    // https://github.com/zloirock/core-js#commonjs-api
    imports: [
      'core-js/stable',
      'regenerator-runtime/runtime'
    ]
  },
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource='' }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },
});
