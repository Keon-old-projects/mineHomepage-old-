// webpack.config.js

const path = require('path');
// node 中與路徑的相關套件
module.exports = {
  entry: './src/all.js',
  // 進入點，所以檔案必須與此檔案有關聯才會被編譯
  output: {
    filename: 'all.bundle.js',
    // 編譯檔案名稱
    path: path.resolve(__dirname, './dist')
    // 編譯檔案的位置
  }
};
