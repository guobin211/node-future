const fs = require('fs')
const file = '/Users/guobin/vscode/node-future/package.json'

function checkFile(path) {
  // 检查当前目录中是否存在该文件
  fs.access(path, fs.constants.F_OK, (err) => {
    console.log(`${path} ${err ? '不存在' : '存在'}`)
  })
  // 检查文件是否可读
  fs.access(path, fs.constants.R_OK, err => {
    console.log(`${file} ${err ? '不可读' : '可读'}`);
  })
  // 检查文件是否可写
  fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? '不可写' : '可写'}`);
  });
}

checkFile(file)
