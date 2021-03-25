// const Project = require('../model/Project');
// // const db = require('../configuration/db')

// module.exports = {
//   // async home(ctx) {
//   //   try {
//   //     const response = await Project.getInstance().getHomePage();
//   //     ctx.body = { status: "success", response: response };
//   //   } catch (err) {
//   //     ctx.throw(500, err)
//   //   }
//   // },
//     async add(ctx){
//         try {
//           const {body} = ctx.request;
//           // var response = await db.query(`SELECT 1+1 as total`);
//           // console.log(response);
//           // ctx.body = "success"
//           var project = await db.query(`SELECT * FROM projects WHERE project_id=`+body.project_id+``);
//           if(project.length>0){
//             ctx.throw(406, 'Not Acceptable! Project with same id already exist');
//           }else{
//             const response = await Project.getInstance().addProject(body);
//             ctx.body = { status: "success", response: response };
//           }
//         } catch (err) {
//           ctx.throw(500, err)
//         }
//       },

//       async update(ctx){
//         try {
//           const {body} = ctx.request;
//           var project = await db.query(`SELECT * FROM projects WHERE project_id=`+body.project_id+``);
//           if(project.length>0){
//             const response = await Project.getInstance().updateProject(body);
//             ctx.body = { status: "success", response: response };
//           }else{
//             ctx.throw(404, 'Project Not Found');
//           }
//         } catch (err) {
//           ctx.throw(500, err)
//         }
//       },
//     // async addProject(ctx){
//     //     try{
//     //         var body = ctx.request.body;
//     //         var project =new Project();
//     //         // console.log('name=>',body)
//     //         project.project_id = body.project_id;
//     //         project.name = body.name;
//     //         project.age = body.age;
//     //         // project.save();
//     //         await db.query(`INSERT INTO projects(project_id, name, age) VALUES('`+project.project_id+`,`+project.name+`,`+project.age+`)`);
//     //         ctx.body = project;
//     //     }catch(error){
//     //         ctx.throw(error);
//     //     }
//     // },
//     async get(ctx){
//         try{
//             var projects = await db.query(`SELECT * FROM projects`)
//             ctx.body = {data: projects};
//         }catch(error){
//             ctx.throw(error);
//         }
//     }
// }