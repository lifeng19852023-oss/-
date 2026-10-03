const userService = require('../services/userService')


async function login(req,res){

    const {
        username,
        password
    } = req.body


    const user =
      await userService.login(
        username,
        password
      )


    if(!user){

        return res.json({

            code:401,

            message:'账号或密码错误'

        })

    }


    res.json({

        code:200,

        message:'登录成功',

        data:{

            user:{
                id:user.id,
                username:user.username,
                role:user.role
            },

            token:'test-token'

        }

    })

}


module.exports={
    login
}