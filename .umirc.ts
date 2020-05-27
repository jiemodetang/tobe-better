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
  
});
