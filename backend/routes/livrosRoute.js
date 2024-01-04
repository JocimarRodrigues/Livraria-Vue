const { Router } = require("express");
const LivrosController = require("../controllers/LivrosController.js");

const multer = require("multer"); 
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
      cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => { 
      cb(null, Date.now() + path.extname(file.originalname)); 
    }, 
  });

  const upload = multer({
    storage: storage, 
    limits: { fileSize: 1024 * 1024 * 5 }, 
  });


  
const router = Router();

router.get("/livros", LivrosController.pegaTodosOsLivros)
router.get("/livros/:id", LivrosController.pegaUmLivro)
router.post("/livros", upload.single("imagem"), LivrosController.criaNovoLivro)
router.put("/livros/:id", upload.single("imagem"), LivrosController.atualizarLivro)
router.delete("/livros/:id", LivrosController.excluirLivro)

module.exports = router;