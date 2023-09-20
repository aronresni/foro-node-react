const getUser = require("../../controllers/Users/getUser")


const getUserHandler = async (req, res) => {
    try {
        const user = await getUser.getUser();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getUserHandler;