const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const koaBody = require('koa-body')

require('./src/bootstrap/globals');
app.use(koaBody());



const port = process.env.PORT ||1000;
require('./src/router')(app, Router);
app.listen(port, () => { console.log(`listen to port ` + port) });