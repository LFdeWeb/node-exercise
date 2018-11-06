const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
  console.log('server is under attach')
  ctx.body = 'warning'
})

app.listen(3070, console.log('server 3070 is running'))