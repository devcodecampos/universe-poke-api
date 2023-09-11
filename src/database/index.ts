import "dotenv/config";
import { Dialect, Sequelize } from "sequelize";

const { DB_DRIVER, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } =
  process.env;

export const sequelize = new Sequelize({
  dialect: DB_DRIVER as Dialect,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  logging: false,
});