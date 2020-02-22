const db = require("../../.config/connection")

module.exports = {
    serviceAddUser: (data, callBack)=>{
        db.query(
            `INSERT INTO user(firstName, lastName, gender, email, password, number)
            values (?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, result)
                }
            }
        )
    },
    serviceGetUsers: callBack =>{
        db.query(
            `SELECT * FROM user`,
            [],
            (err, results, fields)=> {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceGetUsersById: (id, callBack)=>{
        db.query(
            `SELECT * FROM user WHERE idUser = ?`,
            [id],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results[0])
                }
            }
        )
    },
    serviceUpdateUser: (data, callBack)=>{
        db.query(
            `UPDATE user SET firstName=?, lastName=?, gender=?, email=?, password=?, number=? WHERE idUser=?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceDeleteUser: (data, callBack)=>{
        db.query(
            `DELETE FROM user WHERE idUser=?`,
            [data.id],
            (err, results, fields)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceGetUserByEmail: (email, callBack)=>{
        db.query(
            `SELECT firstName, email, password FROM user WHERE email = ?`,
            [email],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results[0])
                }
            }
        )
    }
}