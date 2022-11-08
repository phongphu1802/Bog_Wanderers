const mongoose = require("../../Config/Database/ConnectDB");

const role = require("../DTO/RoleDTO.js");

const RoleModel = mongoose.model("role", role);

module.exports = RoleModel;
