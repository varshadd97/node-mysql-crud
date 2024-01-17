const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "myFirstConnection",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  //   create Database

  //   connection.query("CREATE DATABASE myFirstConnection", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database Created");
  //   });

  //   create table

  //   var sql = "CREATE TABLE customers (name VARCHAR(255) , address VARCHAR(255))";
  //   var sql =
  //     "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  //   connection.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });

  // 1 record inserted

  // var sql = "INSERT INTO customers (name , address ) VALUES('VARSHA', 'PUNE')";

  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  //insert multiple recoreds

  // var sql = "INSERT INTO customers (name , address ) VALUES ? ";
  // var values = [
  //   ["Umesh", "PUNE"],
  //   ["Ravi", "Pune"],
  //   ["Ganesh", "Solapur"],
  //   ["aaradhya", "Bi Bi Darphal"],
  // ];

  // connection.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("no. of records inserted", result?.affectedRows);
  // });

  // const sql = "SELECT * from customers";

  // connection.query(sql, function (err, result, fields) {
  //   if (err) throw err;
  //   console.log("result", result);
  //   console.log("fields", fields);
  // });

  // const sql = "SELECT * from customers WHERE address = 'PUNE'";
  // const sql = "SELECT * from customers  ORDER BY  name";

  // const sql =
  //   "UPDATE customers  SET address = 'Bi Bi Darphal' WHERE address = 'Solapur' ";
  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("result", result);
  // });

  // const sql = "ALTER TABLE users ADD COLUMN id INT AUto_INCREMENT PRIMARY KEY";
  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("result", result);
  // });

  // const sql = "INSERT INTO users (name, favorite_product)  VALUES ?";

  // const values = [
  //   ["VARSHA", "3"],
  //   ["UMESH", "1"],
  // ];

  var sql =
    "SELECT customers.name AS customerName, users.name AS usersName FROM users JOIN customers ON users.favorite_product = customers.id";

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("result", result);
  });
});
