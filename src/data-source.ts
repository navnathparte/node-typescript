import { DataSource } from "typeorm";
import { ormConfig } from "./config/ormconfig";
import { DatabaseStatus } from "./enum/databse.enum";

export const AppDataSource = new DataSource({
  ...ormConfig,
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log(DatabaseStatus.CONNECTED);
  } catch (error) {
    console.error(DatabaseStatus.CONNECTION_ERROR, error);
  }
};
