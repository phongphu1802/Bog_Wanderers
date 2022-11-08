const express = require("express");
const app = express();
const port = 4000;
const loginRouter = require("./src/Modules/Router/LoginRouter");
const accountRouter = require("./src/Modules/Router/AccountRouter");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//express > 4.16.1
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.post("/test", (req, res) => {
  console.log(req.params, req.body);
  res.json(req.body);
});

//Account
app.use("/api/account", accountRouter);
//Login
app.use("/api/login", loginRouter);

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
