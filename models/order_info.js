/**
 * Created by leisong on 2016-12-11.
 */
var  client = require('../database');
var  uid = require('../public/uuid');//
function  Order_info(order_info) {
    this.user_name=order_info.user_name;
    this.user_No=order_info.user_No;
    this.user_phone = order_info.user_phone;
}
var tableName = "order_info";
mysql = client.getDbCon();
module.exports = Order_info;
Order_info.prototype.save = function  save(callback) {
    var date = new Date();
    var time = {
        date: date,
        year : date.getFullYear(),
        month : date.getFullYear() + "-" + (date.getMonth() + 1),
        day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+":"+date.getSeconds()
    };

    uuid = uid.v4();
    var sql ="insert into order_info (user_id,user_name,user_No,user_phone,order_date) values(?,?,?,?,?)";

    mysql.query(sql,[uuid,this.user_name,this.user_No,this.user_phone,time.minute],function(err,results,fields){
        if (err) {
            throw err;
        } else {
            return callback(err, results, fields);
        }
    });
};
Order_info.get = function  save(callback) {
    var sql = "select * from order_info";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            callback(err,results,fields);
        }
    })
};
