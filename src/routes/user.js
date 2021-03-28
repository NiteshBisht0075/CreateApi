const controller = require('../controller/UserController')
function getUserHome(ctx) { ctx.body = "User Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('/', '/', getUserHome);
    router.post('/addUser', controller.add);
    router.put('/updateUser', controller.update);
    router.get('/get', controller.get);
    router.delete('/deleteUser',controller.delete);
    router.get('/join',controller.join);
    app.use(router.routes()).use(router.allowedMethods());
}
