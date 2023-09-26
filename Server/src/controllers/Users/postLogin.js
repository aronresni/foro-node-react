const { User } = require("../../db");

const postLogin = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        // Verificar la contraseña
        if (user.password !== password) {
            throw new Error("Contraseña incorrecta");
        }

      
        return user;
    } catch (error) {
        throw error; 
    }
};

module.exports = { postLogin };
