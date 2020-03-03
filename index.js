const fs = require('fs')
const path = require('path')

const dir = fs.readdirSync(__dirname)

// 当前执行node命令时候的目录地址, 即工作目录： process.cwd()
console.log(process.cwd())

// 模块所在的目录
console.log(__dirname)

console.log(dir)
const path1 = decodeURI('https://cdn.jsdelivr.net/gh/chwech/image-bed@master')

const ignore = [
  '.git'
]


function print(dir) {
  dir.forEach(item => {
    if (ignore.includes(item)) {
      return
    }
    let stat = fs.statSync(path.resolve(__dirname, item))
    if (stat.isDirectory()) { // 如果是文件夹
      return
    }
    console.log(`${path1}/${item}`)
  })
}

print(dir)
