const { Router } = require("express");
const router = Router();
const getUserHandler = require("../Handler/Users/getUserHandler")
const postRegisterHandler = require("../Handler/Users/postRegisterHandler")
const postLoginHandler = require("../Handler/Users/postLoginHandler");
const getUserByNameHandler = require("../Handler/Users/getUserByNameHandler");
router.post("/signup", postRegisterHandler)
router.post("/login", postLoginHandler)
router.get("/users", getUserHandler)

router.get("/activeuser", getUserByNameHandler)




module.exports = router; // Exporta solo el router