const controller = require('../controller/ProjectController')
function getProjectHome(ctx) { ctx.body = "Project Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/project' });
    router.get('/', '/', getProjectHome);
    router.post('/addProject', controller.add);
    router.put('/updateProject', controller.update);
    router.get('/getProject', controller.get);
    router.delete('/deleteProject',controller.delete)
    app.use(router.routes()).use(router.allowedMethods());
}
