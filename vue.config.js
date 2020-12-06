module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        'plotly.js$': 'plotly.js/dist/plotly-basic.js',
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule("js-plotly")
      .test(/\.js$/)
      .use("ify-loader")
      .loader("ify-loader")
      .end();
  }
};
