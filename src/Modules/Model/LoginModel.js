const mongoose = require("../../Config/Database/ConnectDB");

const account = require("../DTO/AccountDTO.js");

const LoginModel = mongoose.model("account", account);

module.exports = LoginModel;
