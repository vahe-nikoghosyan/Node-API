import * as Joi from "joi";
// const Joi = require("@hapi/joi");

// export const emailValidator = Joi.object({
//   email: Joi.string().required(),
// });

export const userValidator = Joi.object({
  id: Joi.number().optional(),
  // email: Joi.string().allow([null]),
  // firstName: Joi.string().allow(null),
  // last_name: Joi.string().allow([null]),
  // date_of_birth: Joi.date().allow([null]),
  // telephone_number: Joi.string().allow([null]),
  // is_active: Joi.boolean().optional(),
});
