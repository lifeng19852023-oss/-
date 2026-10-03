const db = require('../db/mysql');



async function login(
    username,
    password
){

    const [rows] =
    await db.query(
        `
        SELECT *
        FROM users
        WHERE username=?
        AND password=?
        `,
        [
          username,
          password
        ]
    )


    if(rows.length===0){

        return null

    }


    return rows[0]

}


module.exports={
    login
}