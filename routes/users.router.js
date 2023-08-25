var express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  userWithEmail,
  updateUser,
} = require("../controller/user.controller");
var router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.post("/user/email", userWithEmail);

module.exports = router;
