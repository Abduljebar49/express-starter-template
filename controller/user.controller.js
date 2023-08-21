
const Users = require('../db');

const getUsers = (req, res, next) => {
    res.status(200).send({
        model: Users,
        message: "Successfully fetched",
        statusCode: 200
    })
}

const getUser = (req, res, next) => {
    const { id } = req.params;
    const user = Users.find((ele) => ele.id == id);
    res.status(200).send({
        model: user,
        message: "Successfully fetched",
        statusCode: 200
    })
}

module.exports = {
    getUsers,
    getUser
}