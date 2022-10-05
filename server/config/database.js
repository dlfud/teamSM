const mysql = require("mysql");
const connection = mysql.createConnection({
 host: "localhost",
 user: "sm",
 password: "1234",
 database: "horang",
});

module.exports = connection;
