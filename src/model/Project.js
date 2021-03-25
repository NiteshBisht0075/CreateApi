// // require('../controller/ProjectController')
// class Project {
//   constructor(){}

//   // async getHomePage() {
//   //   return 'Project API';
//   // }

//   async addProject(param){
//     // var response = await db.query(`INSERT INTO projects(title,workspace_id) VALUES('`+param.title+`',`+param.workspace_id+`)`);
//     var response = await db.query(`INSERT INTO projects(name) VALUES('`+param.name+`')`);
//     // var id = response.insertId;
//     return response;

//   }
//   async updateProject(param){
//     var updateString = ``;
//     // updateString += (param.title ? `title=` + `'` + param.title + `'` : '');
    
//     // updateString += (param.user_id? ( (updateString!==""?`, `:``) +`repository_id=`+ param.user_id):``);
//     updateString += (param.name? ( (updateString!==""?`, `:``) +`status=`+`'`+ param.name+`'`):``);
//     // updateString += (param.age? ( (updateString!==""?`, `:``) +`priority=`+param.age):``);
//     var response = await db.query(`UPDATE projects SET `+updateString+ ` WHERE project_id=`+param.project_id);
//     return response;
//   }

// }
// module.exports = Project;
// module.exports.getInstance = () => new Project();