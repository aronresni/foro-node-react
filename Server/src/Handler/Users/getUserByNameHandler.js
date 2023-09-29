const getUserByName = require("../../controllers/Users/getUserByName")

const getUserByNameHandler = async (req, res) => {
    const username = req.query.username
    try {
        const userState = await getUserByName.getUserByName(username)
        res.status(201).json(userState)
    } catch (error) {
throw error
    }

}

module.exports = getUserByNameHandler