import "dotenv/config";
import { Sequelize } from "sequelize";

const database = process.env.DB_DATABASE as string;
const username = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");
  } catch (e) {
    console.log("Error al conectar a la base de datos", e);
  }
};

export { sequelize, connection };
