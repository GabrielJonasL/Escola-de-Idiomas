API REST - Escola de Idiomas

API REST desenvolvida em Node.js com Express e MySQL/MariaDB para gerenciamento de alunos de uma escola de idiomas. Projeto referente à avaliação prática.

---

Tecnologias Utilizadas

*Node.js
*Express
*MySQL / MariaDB (`mysql2`)
*Nodemon
*Morgan
*Body-Parser
*CORS

---

Pré-requisitos

Antes de iniciar, você precisará ter instalado na sua máquina:
* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/)
* [Postman](https://www.postman.com/) (para realizar os testes dos endpoints)

---

Configuração do Banco de Dados

1. Abra o terminal do MySQL/MariaDB e crie o banco de dados e a tabela executando os comandos contidos no arquivo `schema.sql`:

sql
CREATE DATABASE IF NOT EXISTS escola_idiomas;

USE escola_idiomas;

CREATE TABLE IF NOT EXISTS estudante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idioma VARCHAR(50) NOT NULL,
    nivel VARCHAR(30) NOT NULL
);

Certifique-se de que as credenciais do banco no arquivo config/database.js correspondem às suas configurações locais (usuário, senha e host).

2. Clone o repositório:
Bash

git clone [https://github.com/GabrielJonasL/Escola-de-Idiomas]
cd escola-de-idiomas

3.Instale as dependências:
Bash

npm install

4. Inicie o servidor em modo de desenvolvimento:
Bash

npm start

O servidor será iniciado na porta 3000 (http://localhost:3000).
