import knex from "knex";

const environment = process.env.NODE_ENV || "development";
import configuration from "../knexfile";
const connection = knex(configuration[environment]);
export default connection;
