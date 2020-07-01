require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: process.env.DEV_DATABASE_PASSWORD,
    database: "dev_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: process.env.DEV_DATABASE_PASSWORD,
    database: "test_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
