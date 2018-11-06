const Koa = require('koa')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')

const app = new Koa()

function service (ctx) {
  const cnodeUrl = 'https://cnodejs.org/'
  axios.get('https://cnodejs.org').then((res) => {
    var $ = cheerio.load(res.data)
    var items = [];
    var content = $('#topic_list .topic_title').text()
    $('#topic_list .topic_title').each((index, element) => {
      items.push({
        title: $(element).attr('title'),
        href: cnodeUrl + $(element).attr('href')
      })
    })
    items = JSON.stringify(items)
    fs.writeFile('2.js', items, function (error) {
      console.log('文件写入完毕')
      console.log(error)
    })
    resolve(items)
  }).then((items) => {
    axios.get(item[0].href).then((res) => {
      console.log(res)
      console.log('请求内容完成')

    })
  }).catch((res)=>{
    console.log('qingqiushibai', res)
  })
}

app.use((ctx) => {
  service(ctx)
})

app.listen(3060, console.log('server has running'))