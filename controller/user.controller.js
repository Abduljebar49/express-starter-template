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

const updateUser = (req, res) => {
  const { id } = req.body;
  const { name, password, email } = req.body;
  var user;
  Users.map((ele) => {
    if (id == ele.id) {
      user = ele;
      ele.name = name;
      ele.password = password;
      ele.email = email;
    }
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

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = Users.findIndex((ele) => ele.id == id)
  if (index == -1) {
    res.send({
      model: null,
      message: "No id found with given ID",
      statusCode: 200,
    });
    return;
  }
  const user = Users.splice(1, index);
  res.send({
    model: user,
    message: "user deleted successfull",
    statusCode: 200
  })
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  userWithEmail,
  updateUser,
  deleteUser
};
