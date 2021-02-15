import knex from "../../db/knex";
import User from "../models/User.model";

export const getAllUsers = async () => {
  const users = await User.bindKnex(knex).query().select("id", "firstName", "lastName", "age", "address");
  console.log(users, "users");
  return users;
  // return db.select("*").from("users");
};

export const insertUser = async newUser => {
  const user = await User.bindKnex(knex).query().insert(newUser);

  return user;
};

export const getUserById = async id => {
  const user = await User.bindKnex(knex).query().select("*").where("id", id).first();

  return user;
};

export const deleteUser = async id => {
  await User.bindKnex(knex)
    .query()
    .deleteById(id)
    .then(function (aa) {
      console.log(aa, "Aa");
      knex.destroy();
    });
};

export const updateUser = async (id, settings) => {
  try {
    await User.bindKnex(knex).query().update(settings).where({ id });

    return await getUserById(id);
  } catch (error) {
    return "failure";
  }
};
