var express = require("express");
const { getUsers, getUser, addUser } = require("../controller/user.controller");
var router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);

module.exports = router;
