const todo = {
  getAllTodo(db) {
    return db.select("*").from("todos");
  },
  insertTodo(db, newTodo) {
    return db
      .insert(newTodo)
      .into("todos")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  getById(db, id) {
    return db.from("todos").select("*").where("id", id).first();
  },
  deleteTodo(db, id) {
    return db("todos").where({ id }).delete();
  },
  updateTodo(db, id, todoFields) {
    return db("todos").where({ id }).update(todoFields);
  },
};

export default todo;
