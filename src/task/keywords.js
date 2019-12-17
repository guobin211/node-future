const fs = require('fs')

async function getDirs() {
  console.log(arguments)
  const dirs = await fs.readdirSync('./', { withFileTypes: true })
  console.log('call getDirs')
  for (const dir of dirs) {
    if (dir.isDirectory()) {
      console.log(`${dir.name} is dir`)
    }
  }
  return dirs
}

function getStats() {
  fs.stat('./post.js', { bigint: 1024 }, (err, data) => {
    console.log(data.isDirectory())
    console.log(`
      访问时间: ${data.atime},
      修改文件的时间: ${data.mtime},
      更改文件状态的时间: ${data.ctime},
      文件创建的时间: ${data.birthtime},
    `)
  })
}

getDirs().then(res => {
  console.log(res)
})

getStats()
