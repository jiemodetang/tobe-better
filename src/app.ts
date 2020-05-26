import { ResponseError } from 'umi-request';
export const request = {
    prefix: 'https://game.gtimg.cn',
    errorHandler: (error: ResponseError) => {
        // 集中处理错误
        console.log(error);
    },
    // proxy: {
    //     '/api': {
    //       'target': 'https://game.gtimg.cn/',
    //       'changeOrigin': true,
    //       'pathRewrite': { '^/api' : '' },
    //     },
    //   },
};