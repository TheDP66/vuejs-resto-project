const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081",
  filenameHashing: true,
  lintOnSave: true,
  productionSourceMap: false,
});
