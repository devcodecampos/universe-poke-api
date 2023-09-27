import "dotenv/config";
import { DataSource } from "typeorm";
import { Pokemon } from "../entities/Pokemon/Pokemon";

const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: TYPEORM_HOST,
  port: Number(TYPEORM_PORT),
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  entities: [Pokemon],
  synchronize: true,
});