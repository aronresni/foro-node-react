const { Router } = require("express");
const userRouter = require("./userRouter")
const postRouter = require("./postRouter")

const router = Router();


router.use("/Users", userRouter)

router.use("/Posts", postRouter)

module.exports = router;