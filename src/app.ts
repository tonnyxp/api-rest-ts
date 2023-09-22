import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes";
import { connection } from "./database/config";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

connection();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
