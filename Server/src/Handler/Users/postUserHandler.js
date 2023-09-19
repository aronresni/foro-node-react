const postUser = require("../../controllers/Users/postUser")


const postUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body
        const createUser = await postUser.postUser(email, password)
        res.status(200).json(createUser)
    } catch (error) {
        res.status(400).json({ error: "Hubo un error al crear el usuario" });
    }
}

module.exports = postUserHandler