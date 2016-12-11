/**
 * Created by leisong on 2016-12-11.
 */
var  client = require('../database');
var  uid = require('../public/uuid');
function  Seats(seats) {
    this.seats=seats.seats;
}
var tableName = "seat";
mysql = client.getDbCon();
module.exports = Seats;
Seats.get =  function (callback) {
    var sql = "select * from seat ";
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
Seats.reduce =  function (callback) {
    var sql = "update seat set seats=seats-1";
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