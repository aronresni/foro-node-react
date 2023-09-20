const { User } = require("../../db")
const getUser = async () => {
    try {
        const users = await User.findAll()
        if (users.length === 0) {
            return { error: "No hay usuarios" };
        } else {
            return users
        }
    } catch (error) {
        throw error
    }
}

module.exports = { getUser }