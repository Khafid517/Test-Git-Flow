const db = require("../../.config/connection")

module.exports = {
    serviceAddItem: (data, callBack)=>{
        db.query(
            `insert into item set ?`,
            data,
            (err, result, fileds)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }

            }
        )
    },
    serviceUpdateItem: (data, callBack)=>{
        db.query(
            `select * from item where idItem=?`,
            [data.idItem],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else if(result[0] == null){
                    return callBack(null, result)
                }else if(data.email === result[0].email){
                    db.query(
                        `update item set ? where idItem=?`,
                        [data, data.idItem],
                        (err, result)=>{
                            if(err){
                                return callBack(err)
                            }else{
                                return callBack(null, result)
                            }
                        }
                    )
                }else{
                    return callBack("false")
                }
            }
        )

    },
    serviceDeleteItem:(data,callBack)=>{
        db.query(
            `select idItem from item where idItem=?`,
        [data.idItem],
        (err,results)=>{
            if(err){
                return callBack(err);
            }else{
                db.query(
                    `delete from item where idItem=?`,
                    [data.idItem]);
                return callBack(null,results)
            }
        }
    )},
    serviceGetItem:callBack=>{
        db.query(`select * from item`,
        [],
        (err,result)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,result)
            }
        })
    },
    serviceGetItemById:(data,callBack)=>{
        db.query(
            `select * from item where idItem=?`,
            [data],
            (err,results)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,results)
                }
            }
        )
    },
}