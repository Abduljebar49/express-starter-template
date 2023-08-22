const Users = require("../db");

const getUsers = (req, res, next) => {
  res.status(200).send({
    model: Users,
    message: "Successfully fetched",
    statusCode: 200,
  });
};

const getUser = (req, res, next) => {
  const { id } = req.params;
  const user = Users.find((ele) => ele.id == id);
  res.status(200).send({
    model: user,
    message: "Successfully fetched",
    statusCode: 200,
  });
};

const addUser = (req, res) => {
  const { name, password, email } = req.body;
  const id = Users[Users.length - 1].id + 1;
  Users.push({
    id,
    name,
    password,
    email,
  });
  res.status(200).send({
    model: user,
    message: "Successfully fetched",
    statusCode: 200,
  });
};

const userWithEmail = (req, res) => {
  const { email } = req.body;

  const user = Users.find((ele) => ele.email === email);
  res.send({
    model: user,
    message: "Successfully fetched",
    statusCode: 200,
  });
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  userWithEmail,
};
