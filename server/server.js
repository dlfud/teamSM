const express = require("express");
const app = express();
const path = require("./Router/path");

app.all("/*", function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "http://localhost:3000");
 next();
});

app.use("/", path);

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
 console.log(`Listening on port ${port}`);
});
