let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUser = (req, res) => {
  res.status(200).json({
    users,
  });
};

// create users
const createUser = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const newUser = {
    id: uuidv4(),
    username,
    email,
  };

  users.push(newUser);
  res.status(201).json(users);
};

// update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);

  res.status(200).json(users);
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
