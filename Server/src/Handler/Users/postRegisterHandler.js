const postRegister = require("../../controllers/Users/postRegister")


const postRegisterHandler = async (req, res) => {
    try {
        const { email, password, username } = req.body
        const createUser = await postRegister.postRegister(email, password, username)
        res.status(200).json(createUser)
    } catch (error) {
        res.status(400).json({ error: "Hubo un error al crear el usuario" });
    }
}

module.exports = postRegisterHandler