const { Router } = require("express");
const router = Router();
const getUserHandler = require("../Handler/Users/getUserHandler")
const postUserHandler = require("../Handler/Users/postUserHandler")
router.post("/signup", postUserHandler)
router.get("/users", getUserHandler)




module.exports = router; // Exporta solo el router