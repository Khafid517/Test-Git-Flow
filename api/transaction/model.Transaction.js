const db = require('../../.config/connection');

module.exports={
    serviceCekBarang:(data,callBack)=>{
        db.query(
            `select stock from item where idItem=?`,
            [data.idItem],
            (err,results)=>{
                if(err){
                    console.log(err)
                    return callBack(err);   
                }if(results.length < 1){
                    return callBack("item not found")
                }if(results[0].stock <= 0){
                    console.log(results[0].stock);
                    return callBack("out of stok");

                }else{
                    return callBack(null,results[0]);
                }
            }
        )
    },
    servicePesanBarang:(data,callBack)=>{
        db.query(
            `select * from item where idItem=?`,
            [data.idItem],(err,results)=>{
                if(err){
                    console.log(err);
                    return callBack(err)
                }if(results.length < 1){
                    return callBack("No-Id")  
                }else if(results[0].stock <= 0){
                    return callBack("out of stok")
                }else if(results[0].stock < data.jumlah){
                    return callBack("stok tdk cukup")
                }else if(data.owner === results[0].owner){
                    return callBack("myItem")
                }
                else{
                    const data_barang = results[0];
                    const total = data_barang.price * data.jumlah
                    const hasil = results[0].stock - data.jumlah
                    db.query(
                        `update item set stock=? where idItem=?`,
                        [
                            hasil,
                            data.idItem
                        ]
                    )
                    db.query(
                        `insert into transaction (itemName, price, amount, 
                            totalPrice, owner, buyer)
                            values(?, ?, ?, ?, ?, ?)`,
                            [
                                results[0].itemName,
                                data_barang.price,
                                data.jumlah,
                                total,
                                results[0].owner,
                                data.buyer
                            ]
                    )

                    return callBack(null,results)
                }
            }
        )
    }
}