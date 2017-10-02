/**
 * Created by Aki on 7/4/2017.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var secret="fgkltry89243u2jfrdslnvxczfda";
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "Admin",
    password: "123456",
    database: "mydb"
});
var fs=require('fs');
sha256=require('sha256');


function RegisterUser(username, hashedpassword ) {
    var sql = "INSERT INTO users (username,password)\nValues("+"\""+username+"\""+",\""+hashedpassword+"\");" ;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("user was added")
        filename=sha256(username+hashedpassword);
        console.log(filename);
        var stream = fs.createWriteStream(filename+".txt");

    });
}

function CheckUserNameandPasword(usrname, hashedpassword) {
    usrname1="notjohn";
    var sql = "SELECT username,password FROM users WHERE username=\""+usrname+"\"";

    return  con.query(sql, function (err, result) {
        if (err) throw err;
        if(result[0]==undefined) {
            RegisterUser(usrname, hashedpassword);
        }
    });
}


router.post('/', function(req, res, next) {
   //res.send('respond with a resourcdddddddde');
    payload=req.body;
    token=jwt.encode(payload,secret);
    res.set("token",token)
    //console.log(res);
    res.send(token)
});



module.exports = router;
