
class Project {
  constructor(){}

  async addProject(param){
    var response = await db.query(`INSERT INTO projects(project_id,name) VALUES(`+param.project_id+`,'`+param.name+`')`);
    // var response = await db.query(`INSERT INTO projects(name) VALUES('`+param.name+`')`);
    // var id = response.insertId;
    return response;

  }
  async updateProject(param){
    var updateString = ``;
    // updateString += (param.title ? `title=` + `'` + param.title + `'` : '');
    
    // updateString += (param.project_id? ( (updateString!==""?`, `:``) +`repository_id=`+ param.project_id):``);
    updateString += (param.name? ( (updateString!==""?`, `:``) +`name=`+`'`+ param.name+`'`):``);

    // updateString += (param.user_id? ( (updateString!==""?`, `:``) +`user_id=`+param.user_id):``);
    var response = await db.query(`UPDATE projects SET `+updateString+ ` WHERE project_id=`+param.project_id);
    return response;
  }
  async deleteProject(param){
    // var response = await db.query(`INSERT INTO projects(title,workspace_id) VALUES('`+param.title+`',`+param.workspace_id+`)`);
    // var response = await db.query(`INSERT INTO projects(project_id,name,age) VALUES(`+param.project_id+`,'`+param.name+`',`+param.age+`)`);
    var response = await db.query(`DELETE FROM projects WHERE project_id=`+param.project_id);
    // var id = response.insertId;
    return response;

  }

}
module.exports = Project;
module.exports.getInstance = () => new Project();