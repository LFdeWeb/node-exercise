const Koa = require('koa')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')

const app = new Koa()

function service (ctx) {
  const cnodeUrl = 'https://cnodejs.org'
  axios.get('https://cnodejs.org').then((res) => {
    var $ = cheerio.load(res.data)
    var items = []
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
      console.log('error', error)
    })
    return items
  }).then((items) => {
    // console.log(items)
    items = JSON.parse(items)
    items.forEach((item, index) => {
      if (index < 3) {
        axios.get(item.href).then((res) => {
          // console.log('请求具体页面数据', res)
          $ = cheerio.load(res.data)
          let name = $('.user_name a').text()
          console.log(name)
          fs.writeFile('topicName.txt', name, {flag: 'a'}, function (error) {
            if (error) {
              console.log('获取用户名称出错')
            }
            console.log('用户名称写入完成')
          })
        })
      }
    })

  }).catch((res) => {
    console.log('qingqiushibai', res)
  })
}

app.use((ctx) => {
  service(ctx)
})

app.listen(3060, console.log('server has running'))