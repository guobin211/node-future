const path = require('path')
const {
  readFile,
  readFileSync,
  readdir,
  readdirSync,
  readlink,
  readlinkSync,
  realpath,
  realpathSync,
  rename,
  renameSync,
} = require('fs')
const { funcTime } = require('../utils/func-time')

const files = [
  './2.png',
  './compress-image.js',
  './fs-time.js',
  './parse-json.js',
  './read-buffer.js',
]

function logCall(data) {
  console.log(data.length)
}

function testFunc() {
  for (const filePath of files) {
    funcTime(readFile, filePath, logCall)
    funcTime(readFileSync, filePath, logCall)
  }
}

testFunc()
