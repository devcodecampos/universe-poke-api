import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3333;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});