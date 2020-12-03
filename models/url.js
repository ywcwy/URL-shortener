const mongoose = require('mongoose') // 連到資料庫
const Schema = mongoose.Schema    //使用mongoose 提供的 schema 模組
const urlSchema = new Schema({ // 建立資料內容的屬性
  url: {
    type: String,
    required: true
  },
  shortenedURL: {
    type: String,
    required: true
  }

})


//將這份schema命名為URL 並匯出
module.exports = mongoose.model('URL', urlSchema)
