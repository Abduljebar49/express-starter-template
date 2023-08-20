
const Users = require('../db');

const getUsers = (req, res, next) => {
    return Users;
}

const getUser = (req, res, next) => {
    const { id } = req.params;
    const user = Users.find((ele) => ele.id == id);
    return user;
}

module.exports = {
    getUsers,
    getUser
}