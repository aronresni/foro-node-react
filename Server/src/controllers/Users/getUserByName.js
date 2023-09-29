const { User } = require("../../db")

const getUserByName = async (username) => {
    try {
        const user = await User.findOne({
            where: { username: username }
        })
        return user
    } catch (error) {
        throw error
    }
}
module.exports = { getUserByName }