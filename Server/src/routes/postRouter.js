const { Router } = require("express");
const router = Router();


const getPostByDescriptionHandler = require("../Handler/Posts/getPostByDescriptionHandler")
const postPostHandler = require("../Handler/Posts/postPostHandler")
const getPostHandler = require("../Handler/Posts/getPostHandler")
router.post("/createpost", postPostHandler)
router.get("/posts", getPostHandler)
router.get("/:description", getPostByDescriptionHandler)

module.exports = router; // Exporta solo el router