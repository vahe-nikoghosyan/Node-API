import { getAllTodo, getById, insertTodo, deleteTodo, updateTodo } from "../services/todo.service";

export const getAllTodo = async () => {
  getAllTodo();
};

export const getById = async id => {
  getById(id);
};

export const insertTodo = async todo => {
  insertTodo(todo);
};

export const deleteTodo = async id => {
  deleteTodo(id);
};

export const updateTodo = async (id, data) => {
  updateTodo(id, data);
};
