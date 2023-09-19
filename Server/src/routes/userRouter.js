const { Router } = require("express");
const router = Router();

const postUserHandler = require("../Handler/Users/postUserHandler")
router.post("/signup", postUserHandler)




module.exports = router; // Exporta solo el router