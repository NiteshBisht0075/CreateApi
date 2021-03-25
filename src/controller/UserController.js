const User = require('../model/User');

module.exports = {

    async add(ctx){
        try {
          const {body} = ctx.request;
          // var response = await db.query(`SELECT 1+1 as total`);
          // console.log(response);
          // ctx.body = "success"
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
          var user = await db.query(`SELECT * FROM users WHERE user_id=`+body.user_id);
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
    // async addUser(ctx){
    //     try{
    //         var body = ctx.request.body;
    //         var user =new User();
    //         // console.log('name=>',body)
    //         user.user_id = body.user_id;
    //         user.name = body.name;
    //         user.age = body.age;
    //         // user.save();
    //         await db.query(`INSERT INTO users(user_id, name, age) VALUES('`+user.user_id+`,`+user.name+`,`+user.age+`)`);
    //         ctx.body = user;
    //     }catch(error){
    //         ctx.throw(error);
    //     }
    // },
    async get(ctx){
        try{
            var users = await db.query(`SELECT * FROM users`)
            ctx.body = {data: users};
        }catch(error){
            ctx.throw(error);
        }
    }
}