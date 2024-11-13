import { DataSourceOptions } from "typeorm";
import environmentVars from "../constant";

export const ormConfig: DataSourceOptions = {
  type: "mysql",
  host: environmentVars.DB_HOST,
  port: 3306,
  username: environmentVars.DB_USERNAME,
  password: environmentVars.DB_PASSWORD,
  database: environmentVars.DB_NAME,
  entities: ["src/model/**/*.ts"],
  synchronize: true,
  // logging: ["error", "schema"],
  logging: false,
};
