/**
 * Required External Modules
 */
import { Model } from "objection";
const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

import knex from "../db/knex";

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
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes Definitions
 */
console.log(PORT);
app.get("/", (req, res) => {
  res.status(200).send("Good job");
});
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
