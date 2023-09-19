const { Router } = require("express");
const router = Router();

const postPostHandler = require("../Handler/Posts/postPostHandler")
const getPostHandler = require("../Handler/Posts/getPostHandler")
router.post("/createpost", postPostHandler)
router.get("/posts", getPostHandler)


module.exports = router; // Exporta solo el router