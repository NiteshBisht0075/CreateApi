
class User {
  constructor(){}



  async addUser(param){
    // var response = await db.query(`INSERT INTO projects(title,workspace_id) VALUES('`+param.title+`',`+param.workspace_id+`)`);
    var response = await db.query(`INSERT INTO users(user_id,name,age,project_id) VALUES(`+param.user_id+`,'`+param.name+`',`+param.age+`,`+param.project_id+`)`);
    // var id = response.insertId;
    return response;

  }
  async updateUser(param){
    var updateString = ``;
    // updateString += (param.title ? `title=` + `'` + param.title + `'` : '');
    
    // updateString += (param.user_id? ( (updateString!==""?`, `:``) +`repository_id=`+ param.user_id):``);
    updateString += (param.name? ( (updateString!==""?`, `:``) +`name=`+`'`+ param.name+`'`):``);
    updateString += (param.age? ( (updateString!==""?`, `:``) +`age=`+param.age):``);
    updateString += (param.project_id? ( (updateString!==""?`, `:``) +`project_id=`+param.project_id):``);
    var response = await db.query(`UPDATE users SET `+updateString+ ` WHERE user_id=`+param.user_id);
    return response;
  }

  async deleteUser(param){
   
    // var response = await db.query(`INSERT INTO projects(title,workspace_id) VALUES('`+param.title+`',`+param.workspace_id+`)`);
    // var response = await db.query(`INSERT INTO users(user_id,name,age) VALUES(`+param.user_id+`,'`+param.name+`',`+param.age+`)`);
    var response = await db.query(`DELETE FROM users WHERE user_id=`+param.user_id);
    // var id = response.insertId;
    return response;

  }

}
module.exports = User;
module.exports.getInstance = () => new User();