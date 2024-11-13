import "reflect-metadata";
import express, { Application } from "express";
import { connectDatabase } from "./data-source";
import environmentVars from "./constant";

const app: Application = express();
const PORT = environmentVars.PORT;

// Middleware
app.use(express.json());

// Health check API
app.get("/", (req, res) => {
  res.send("🚀 Service is running...✅🚀");
});

app.use((err: any, res: express.Response) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
