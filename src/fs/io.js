const fs = require('fs')

function nodeWrite(path) {
  fs.open(path, 'wx', (err, fd) => {
    if (err) {
      console.log(err)
      if (err.code === 'EEXIST') {
        console.error(`${path} 已经存在`)
        return
      }
      throw err
    }
    // real write data
    fs.writeFileSync(path, 'hello node fs', { encoding: 'utf-8' })
  })
}

function openReadFile(path) {
  // 打开文件
  fs.open(path, 'r', (err, fd) => {
    if (err) {
      console.log(err)
      if (err.code === 'ENOENT') {
        console.error(`${path} 不存在`)
        return
      }
      throw err
    }
    // 读取文件
    fs.readFile(path, { encoding: 'utf-8' }, (err1, data) => {
      if (err1) {
        console.log(err1)
        throw err1
      }
      const text = data.toString()
      if (!text.includes('over')) {
        // 追加文件
        fs.appendFile(path, ' over', err2 => {
          if (err2) throw err2
          console.log('数据已追加到文件')
          fs.close(fd, () => {
            console.log('fs closed')
          })
        })
      }
      fs.close(fd, () => {
        console.log('fs closed')
      })
    })
  })
}

nodeWrite('node.txt')
openReadFile('node.txt')



