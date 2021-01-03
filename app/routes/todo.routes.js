import express from "express";
import { getAllTodo, getById, insertTodo, updateTodo, deleteTodo } from "../controllers/todo.controller";
import { authJwt } from "../middlewares";

let router = express.Router();

router.get("/", authJwt.verifyToken, getAllTodo);
router.get("/:id", getById);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], insertTodo);
router.put("/:id", updateTodo);
router.delets("/:id", deleteTodo);
