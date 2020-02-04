const fs = require('fs')
const path = require('path')
const request = require('request')

const HOST = 'http://wuhan2020.org.cn'
const INDEX = '/data/index.json'
const FILE = HOST + '/data/fe/'

let isFirst = true;

function getSource() {
  return new Promise((resolve, reject) => {
    request.get(HOST + INDEX, (error, response, body) => {
      if (error) {
        console.log(error)
      } else {
        resolve(JSON.parse(body))
      }
    });
  });
}

function mapData(map) {
  Object.values(map).forEach(arr => arr.forEach(url => saveFile(url)))
}

function saveFile(url) {
  const names = url.split('/');
  const fileName = names[names.length - 1]
  request.get(FILE + url, ((error, response, body) => {
    if (error) {
      console.log(error)
    } else {
      if (isFirst) {
        isFirst = false
      }
      console.log(fileName)
      fs.writeFileSync(path.resolve(__dirname, '..', '..', 'assets', fileName), body )
    }
  }))
}

getSource().then(m => {
  mapData(m)
})
