const express = require("express");
const router = express.Router();
const loginModel = require("../Model/LoginModel");
const RoleModel = require("../Model/RoleModel");

router.post("/", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;

  console.log(username, password, confirmPassword);
  if (password === confirmPassword)
    if (username && password)
      loginModel
        .find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).join("Loi server");
        });
  //   else return res.status(500).join("Mật khẩu và tài khoản không được rỗng");
  // else return res.status(500).join("Mật khẩu lại không khớp");
});

module.exports = router;
