const fs = require('fs')
const config = require('../config')
console.log(config.assets)
const langZH = require('../../assets/data/lang-zh.json')
const tw = require('../../assets/data/zh-hk.json')
const en = require('../../assets/data/en.json')

function mergeLang(source, input, out) {
  for (const key in source){
    if (input[key]) {
      source[key] = input[key]
    }
  }
  fs.writeFileSync(out, JSON.stringify(source))
}

// mergeLang(langZH, tw, './zh-tw.json')
mergeLang(langZH, en, './zh-en.json')
