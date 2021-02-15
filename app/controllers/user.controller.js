import { deleteUser, getAllUsers, getUserById, insertUser, updateUser } from "../services/todo.service.js";
import * as HttpStatus from "http-status-codes";

export const __getAllUsers = async (req, res) => {
  getAllUsers().then(users => {
    console.log(users, "users");
    res.send(users);
  });
};

export const __getUserById = async (req, res) => {
  const { id } = req.params;

  getUserById(id).then(user => {
    console.log(user, "users");
    res.send(user);
  });
};

export const __insertUser = async (req, res) => {
  console.log(req.body, "ddd");
  insertUser(req.body).then(user => {
    res.send(user);
  });
};

export const __deleteUser = async (req, res) => {
  const { id } = req.params;

  deleteUser(id).then(data => {
    res.send(data);
  });
};

export const __updateUser = async (req, res) => {
  const {
    params: { id },
    body: user,
  } = req;

  updateUser(id, user).then(updatedUser => {
    console.log(updatedUser, "updatedUser");
    res.send(updatedUser);
  });
};
