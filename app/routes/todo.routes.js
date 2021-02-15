import express from "express";

// import { getAllTodoC, getById, insertTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js";
import { __getAllUsers, __getUserById, __insertUser, __deleteUser, __updateUser } from "../controllers/user.controller";
import { userValidator } from "../shared/validations/index.js";
// import { authJwt } from "../middlewares";

const users = express.Router();

users.get("/", __getAllUsers);
users.get("/:id", __getUserById);
users.post("/", __insertUser);
users.put("/:id", __updateUser);
users.delete("/:id", __deleteUser);

export default users;
