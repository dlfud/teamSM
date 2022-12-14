const db = require("../config/database.js");

// 컨트롤러 프레임 워크
/*
exports.이름 = (req, res) => {
  db.query(``, (err, rows) => {
    if(err) throw err;
  })
}
*/

const table = "secretPost";

// 생성 (C)
exports.create = (req, res) => {
 db.query(`INSERT INTO ${table} SET title = \"${req.body.title}\" , content = \"${req.body.content}\";`, (err) => {
  if (err) throw err;
  res.send("success");
 });
};

// 전체 조회 (R)
exports.findAll = (req, res) => {
 db.query(`SELECT * FROM ${table};`, (err, rows) => {
  if (err) throw err;
  res.send(rows);
 });
};

// 수정 (U)
exports.update = (req, res) => {
 db.query(`UPDATE ${table} SET title = \"${req.body.title}\" , content = \"${req.body.content}\" WHERE id = ${req.body.id};`, (err, rows) => {
  if (err) throw err;
  res.send("success");
 });
};

// 삭제 (D)
exports.delete = (req, res) => {
 db.query(`DELETE FROM ${table} WHERE id =${req.body.id};`, (err, rows) => {
  if (err) throw err;
  res.send("success");
 });
};
