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

connection();

app.listen(PORT, () => {
  console.log(`Listo por el puerto ${PORT}`);
});
