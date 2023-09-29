const { Router } = require("express");
const router = Router();
const multer = require("multer"); // Importa Multer
const path = require("path");

// Configura el almacenamiento para Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos subidos
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname); // Renombrar el archivo con la marca de tiempo y la extensión original
  },
});

// Crea una instancia de Multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

const getPostByDescriptionHandler = require("../Handler/Posts/getPostByDescriptionHandler");
const postPostHandler = require("../Handler/Posts/postPostHandler");
const getPostHandler = require("../Handler/Posts/getPostHandler");
const getImagePostHandler = require("../Handler/Posts/getImagePostHandler")
// Ruta para crear una publicación con carga de imagen utilizando Multer
router.post("/createpost", upload.single("image"), postPostHandler);

// Otras rutas relacionadas con las publicaciones...
router.get("/posts", getPostHandler);
router.get("/:description", getPostByDescriptionHandler);
router.get("/getImage/:imageName", getImagePostHandler)

module.exports = router;
