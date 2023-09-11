import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes";
import { connection } from "./db/config";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

connection();

app.listen(PORT, () => {
  console.log(`Listo por el puerto ${PORT}`);
});
