module.exports = {
    proxy: {
        '/WxAPI': {
            target: 'http://facereocgnition.bjzdyh.com/',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
              '^/WxAPI': '/WxAPI'   //需要rewrite的,
            }
        },
        'connect':  {
            target: 'https://open.weixin.qq.com/',  // 接口域名
            secure: true,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
              '^/connect': '/connect'   //需要rewrite的,
            }
        }
    }
}