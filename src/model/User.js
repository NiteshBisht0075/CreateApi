
class User {
  constructor(){}



  async addUser(param){
    // var response = await db.query(`INSERT INTO projects(title,workspace_id) VALUES('`+param.title+`',`+param.workspace_id+`)`);
    var response = await db.query(`INSERT INTO users(user_id,name,age) VALUES(`+param.user_id+`,'`+param.name+`',`+param.age+`)`);
    // var id = response.insertId;
    return response;

  }
  async updateUser(param){
    var updateString = ``;
    // updateString += (param.title ? `title=` + `'` + param.title + `'` : '');
    
    // updateString += (param.user_id? ( (updateString!==""?`, `:``) +`repository_id=`+ param.user_id):``);
    updateString += (param.name? ( (updateString!==""?`, `:``) +`status=`+`'`+ param.name+`'`):``);
    updateString += (param.age? ( (updateString!==""?`, `:``) +`priority=`+param.age):``);
    var response = await db.query(`UPDATE users SET `+updateString+ ` WHERE user_id=`+param.user_id);
    return response;
  }

}
module.exports = User;
module.exports.getInstance = () => new User();