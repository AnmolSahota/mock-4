let jsonserver = require("json-server");
let server = jsonserver.create();
let router = jsonserver.router("db.json");
// let midd = jsonserver.defaults();
let cors = require("cors");
server.use(cors());
// server.use(midd);
server.use("", router);
server.listen(8080, () => {
  console.log("Connected");
});
