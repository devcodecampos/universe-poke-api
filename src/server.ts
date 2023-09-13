import "dotenv/config";
import express from "express";
import routes from "./routes";
import { sequelize } from "./database";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(routes);

const initApp = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error: any) {
    console.log({ message: "Error when trying to init App" });
    console.log({ error: error.message });
  }
};

initApp();