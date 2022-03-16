module.exports = {
  devServer: {
    // proxy: 'https://xkcd.com/',
    proxy: {
      '/api': {
        target: 'https://xkcd.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
