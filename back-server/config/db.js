var mysql = require('mysql')

db = {
    host: 'localhost',
    user: 'root',
    password: 'LYcandl7@LW520+',   //本项目中密码统一为LYcandl7@LW520+
    database: 'web',
    port: '3306',
}

var conn = mysql.createConnection(db);
module.exports = conn;
