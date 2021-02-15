import { Model } from "objection";

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "users";
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["username"],

      properties: {
        id: { type: "integer" },
        username: { type: "string", minLength: 5, maxLength: 50 },
        firstName: { type: "string", maxLength: 50, nullable: true },
        lastName: { type: "string", maxLength: 50, nullable: true },
        avatar_url: { type: "string", nullable: true, default: "" },
        password: { type: "string" },
        date_of_birth: { type: "string" },
        email: { type: "string" },
        telephone_number: { type: "string" },
        forgot_password_record_id: { type: "string" },
        set_password_record_id: { type: "string" },
        is_superuser: { type: "string" },
        last_login: { type: "string" },
        is_superuser: { type: "string" },
        created_at: { type: "string" },
        updated_at: { type: "string" },
        followers: {},
        address: {
          type: "object",
          properties: {
            street: { type: "string", nullable: true },
            city: { type: "string", nullable: true },
            zipCode: { type: "string", nullable: true },
          },
        },
      },
    };
  }

  static get relationMappings() {
    // One way to prevent circular references
    // is to require the model classes here.
    const User = require("./User");

    return {
      actors: {
        relation: Model.ManyToManyRelation,

        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: User,

        join: {
          from: "movies.id",
          // ManyToMany relation needs the `through` object to describe the join table.
          through: {
            from: "persons_movies.movieId",
            to: "persons_movies.personId",
          },
          to: "persons.id",
        },
      },
      followers: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, "UserFollowers"),
        join: {
          through: {
            from: "followers.userId",
            to: "user.id",
          },
        },
      },
      following: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, "UserFollowers"),
        join: {
          through: {
            from: "followers.followerId",
            to: "user.id",
          },
        },
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: join(__dirname, "UserProfile"),
        join: {
          from: "profile.userId",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = User;
