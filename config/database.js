const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //usuário do mysql(alterar se for diferente)
  password: "", //senha do mysql/mariaDB (foi usado em branco)
  database: "escola_idiomas",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL/MariaDB!");
});

module.exports = connection;
