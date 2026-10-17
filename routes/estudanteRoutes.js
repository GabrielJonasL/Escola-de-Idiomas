const express = require("express");
const router = express.Router();
const db = require("../config/database");

//listar todos os estudantes
router.get("/", (req, res) => {
  const sql = "SELECT * FROM estudante";
  db.query(sql, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar estudantes.", details: err });
    }
    res.status(200).json(results);
  });
});

//buscar estudante por id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM estudante WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar estudante.", details: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Estudante não encontrado." });
    }
    res.status(200).json(results[0]);
  });
});

//cria novo estudante
router.post("/", (req, res) => {
  const { nome, idioma, nivel } = req.body;
  if (!nome || !idioma || !nivel) {
    return res
      .status(400)
      .json({ error: "Campos nome, idioma e nivel são obrigatórios." });
  }

  const sql = "INSERT INTO estudante (nome, idioma, nivel) VALUES (?, ?, ?)";
  db.query(sql, [nome, idioma, nivel], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao cadastrar estudante.", details: err });
    }
    res.status(201).json({ id: result.insertId, nome, idioma, nivel });
  });
});

//atualizar estudante
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idioma, nivel } = req.body;

  const sql =
    "UPDATE estudante SET nome = ?, idioma = ?, nivel = ? WHERE id = ?";
  db.query(sql, [nome, idioma, nivel, id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao atualizar estudante.", details: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Estudante não encontrado." });
    }
    res.status(200).json({ id, nome, idioma, nivel });
  });
});

//remove estudante
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM estudante WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao deletar estudante.", details: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Estudante não encontrado." });
    }
    res.status(200).json({ message: "Estudante removido com sucesso." });
  });
});

module.exports = router;
