
var mysql = require('mysql');



function dropUsersTable() {
    var sql = "DROP TABLE users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Users Table has been droped");
    });
}
function dropUsersTokensTable() {
    var sql = "DROP TABLE userstokens";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("userstokens Table has been droped");
    });
}

var con = mysql.createConnection({
    host: "localhost",
    user: "Admin",
    password: "123456",
    database: "mydb"
});



function RegisterUser(username, hashedpassword ) {
    var sql = "DROP TABLE userstokens";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("userstokens Table has been droped");
    });
}




con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   //dropUsersTable();
/*   console.log("Creating users table ");
    var sql = "CREATE TABLE users (username VARCHAR(255), password VARCHAR(255), hash VARCHAR(255), oldhash VARCHAR(255), PRIMARY KEY (username))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Users Table has been created");
    });*/
   //dropUsersTokensTable();
/*     sql = "CREATE TABLE userstokens (username VARCHAR(255), token VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("UsersTokens Table has been created");
    });*/
/*    sql = "INSERT INTO users" +
        "    VALUES (\"john\",\"someshit\",\"someothertoken\",\"somthingelse\");";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("UsersTokens Table has been created");
    });*/



});


