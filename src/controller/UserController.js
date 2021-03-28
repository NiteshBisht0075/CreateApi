const User = require('../model/User');
// const Project = require('../model/Project');
module.exports = {

    async add(ctx){
        try {
          const {body} = ctx.request;
          var user = await db.query(`SELECT * FROM users WHERE user_id=`+body.user_id+``);
          if(user.length>0){
            ctx.throw(406, 'Not Acceptable! User with same id already exist');
          }else{
            const response = await User.getInstance().addUser(body);
            ctx.body = { status: "success", response: response };
          }
        } catch (err) {
          ctx.throw(500, err)
        }
      },

      async update(ctx){
        try {
          const {body} = ctx.request;
          var user = await db.query(`SELECT * FROM users WHERE user_id=`+body.user_id+``);
          if(user.length>0){
            const response = await User.getInstance().updateUser(body);
            ctx.body = { status: "success", response: response };
          }else{
            ctx.throw(404, 'User Not Found');
          }
        } catch (err) {
          ctx.throw(500, err)
        }
      },
 

    async get(ctx){
        try{
            var users = await db.query(`SELECT * FROM users`)
            console.log(users)
            ctx.body = {data: users};
        }catch(error){
            ctx.throw(error);
        }
    },
    async delete(ctx){
      try {
        // console.log("delete")
        const {body} = ctx.request;
        // console.log(body)
        var user = await db.query(`SELECT * FROM users WHERE user_id=`+body.user_id+``);
        if(user.length>0){
          const response = await User.getInstance().deleteUser(body);
          ctx.body = { status: "success", response: response };
        }else{
          ctx.throw(404, 'User Not Found');
        }
      } catch (err) {
        ctx.throw(500, err)
      }
    },

    async join(ctx){
      try{
          var joins = await db.query(`SELECT users.user_id,users.name,users.age,projects.name FROM users INNER JOIN projects ON users.project_id = projects.project_id`)
          // console.log(joins)
          ctx.body = {data: joins};
      }catch(error){
          ctx.throw(error);
      }
  }

}