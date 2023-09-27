import "dotenv/config";
import express from "express";
import router from "./routes/index.routes";
import { connection } from "./config/mysql";
import { corsMiddleware } from "./middlewares/cors";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(corsMiddleware());
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
