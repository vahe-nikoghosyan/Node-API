exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([{ id: 1, parentId: 1, firstName: "Test", lastName: "Test", age: 17 }]);
    });
};
