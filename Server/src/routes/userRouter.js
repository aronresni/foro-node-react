const { Router } = require("express");
const router = Router();
const getUserHandler = require("../Handler/Users/getUserHandler")
const postRegisterHandler = require("../Handler/Users/postRegisterHandler")
const postLoginHandler = require("../Handler/Users/postLoginHandler")
router.post("/signup", postRegisterHandler)
router.post("/login", postLoginHandler)
router.get("/users", getUserHandler)




module.exports = router; // Exporta solo el router