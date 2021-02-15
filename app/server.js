/**
//  * Required External Modules
//  */

import "dotenv/config";
import cors from "cors";
import express from "express";

import bodyParser from "body-parser";
import { Model } from "objection";
import knex from "../db/knex";

import indexRouter from "./routes/todo.routes";

import t from "../config/index.js";
/**
 * App Variables
 */
const { PORT } = process.env;

const app = express();
const port = PORT || "8080";

/**
 *  App Configuration
 */
Model.knex(knex);
knex
  .raw("select 1+1 as result")
  .then(() => {
    console.log("Connection to DB successfully completed");
  })
  .catch(err => console.log("Connection DB error:", err));

app.use(cors());

app.set("db", knex);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes Definitions
 */

app.use("/", indexRouter);
// app.get("/", (req, res) => {
//   res.links({
//     next: "http://api.example.com/users?page=2",
//     last: "http://api.example.com/users?page=5",
//   });
//   // res.status(200).send("Good job");
//   res.redirect("back");
// });
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
