import { config } from "dotenv";
config();

const environmentVars: any = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

(() => {
  Object.entries(environmentVars).forEach((env: any[]) => {
    if (!env[1] || (env[1] && env[1].toString().trim() === "")) {
      console.log("env -- ", env);
      throw new Error("Please provide proper env variables");
    }
  });
})();

export default environmentVars;
