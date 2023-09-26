const { User } = require("../../db");

const postLogin = async (email, password) => {
    try {
        const user = await User.findOne({ where: { email } });
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
