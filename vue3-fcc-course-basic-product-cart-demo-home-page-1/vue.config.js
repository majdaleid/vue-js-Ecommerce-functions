module.exports = {
    chainWebpack: config => {
      // add this line
      config.watchOptions.ignored = /node_modules/
    }
  }