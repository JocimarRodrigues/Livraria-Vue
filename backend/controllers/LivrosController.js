const database = require("../models");
const fs = require("fs").promises; // Mesma coisa do q utilizar o fs normal, mas usando promises

class LivrosController {
  static async pegaTodosOsLivros(req, res) {
    try {
      const livros = await database.Livros.findAll();
      return res.status(200).json(livros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmLivro(req, res) {
    const { id } = req.params;
    try {
      const livro = await database.Livros.findOne({
        where: { id: Number(id) },
      });
      if (!livro) {
        return res.status(404).json({ message: `Livro ${id} não encontrado` });
      }
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaNovoLivro(req, res) {
    const dados = req.body;

    const livro = {
      id: dados.id,
      titulo: dados.titulo,
      autor: dados.autor,
      classificacao: dados.classificacao,
      resenha: dados.resenha,
      imagem: req.file.path,
    };
    try {
      const novoLivroCriado = await database.Livros.create(livro);
      return res.status(200).json(novoLivroCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarLivro(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    const livroAtualizado = {
      id: novasInfos.id,
      titulo: novasInfos.titulo,
      autor: novasInfos.autor,
      classificacao: novasInfos.classificacao,
      resenha: novasInfos.resenha,
      imagem: req.file.path,
    };
    try {
      await database.Livros.update(livroAtualizado, {
        where: {
          id: Number(id),
        },
      });
      const livro = await database.Livros.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirLivro(req, res) {
    const { id } = req.params;
    try {
      const livro = await database.Livros.findOne({
        where: { id: Number(id) },
      });

      await database.Livros.destroy({ where: { id: Number(id) } });
      if (livro.imagem) {
        await fs.unlink(livro.imagem); // Lógica para deletar a imagem no servidor
      }

      return res
        .status(200)
        .json({ message: `Livro ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivrosController;
