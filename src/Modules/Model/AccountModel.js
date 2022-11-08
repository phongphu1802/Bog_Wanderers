const mongoose = require("../../Config/Database/ConnectDB");

const account = require("../DTO/AccountDTO.js");

const AccountModel = mongoose.model("account", account);

module.exports = AccountModel;
