const Sequelize = require("sequelize");

const db = new Sequelize("mvc", "root", "luigi", {
  host: "localhost",
  dialect: "mysql",
});

const teste = async () => {
  await db.authenticate();
  console.log("Banco de dados conectado com sucesso");
};
teste();
module.exports = db;
