const Koa = require('koa')
const app = new Koa();

app.use(async (ctx)=> {
	ctx.body= ctx
})

app.listen(3000, 'koa is running.')