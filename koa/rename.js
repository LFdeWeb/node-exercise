var fs = require('fs')
var path = require('path')

var dir = './post'
// fs.rename('post.js', '/Users/cy/node/koa/get/js', function (error) {
//   console.log(error)
//   console.log('改名成功')
// })
// node 读取文件目录
fs.readdir('../', function (err, files) {
  console.log(files)
  files.forEach((item) => {
    newItem = item.slice(1)
    // node修改文件名称
    fs.rename(`../`+item,  `../`+newItem, (error)=>{
      if(error){
        throwError(error)
      }
      console.log('改名成功')
    })
  })
})
  // node 写文件
axios.get('https://cnodejs.org').then((res) => {
  console.log('request')
  fs.writeFile('2.text', res.data, function (error) {
    console.log('文件写入完毕')
  })
})






