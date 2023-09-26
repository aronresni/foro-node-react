const postLogin = require("../../controllers/Users/postLogin")
const uuid = require("uuid");

const postLoginHandler = async (req, res) => {
    try {
        const { username, password } = req.body
        const login = await postLogin.postLogin(username, password)
        const token = uuid.v4();
        res.status(200).json({ login, token });

    } catch (error) {
        res.status(400).json({ error: "Hubo un error para inciar sesion" });
    }
}

module.exports = postLoginHandler