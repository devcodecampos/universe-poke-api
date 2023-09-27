import "reflect-metadata";
import "dotenv/config";
import express from "express";
import routes from "./routes";
import { AppDataSource } from "./database/data-source";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(routes);

const initApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!")

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error: any) {
    console.log({ message: "Error when trying to init App" });
    console.log({ error: error.message });
  }
};

initApp();