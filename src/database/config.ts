import "dotenv/config";
import { Sequelize } from "sequelize";

const host = process.env.MYSQL_HOST;
const database = process.env.MYSQL_DATABASE as string;
const username = process.env.MYSQL_USERNAME as string;
const password = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  logging: false,
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
