const { User } = require("../../db");

const postUser = async (email, password) => {
    try {
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { password }
        })
        if (created) {
            return user;
        } else {
            return "Usuario ya existente";
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { postUser };