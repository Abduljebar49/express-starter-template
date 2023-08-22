var express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  userWithEmail,
} = require("../controller/user.controller");
var router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);
router.post("/user/email", userWithEmail);

module.exports = router;
