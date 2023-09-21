const { User } = require("../../db");

const postLogin = async (email, password) => {
    try {
        // Buscar al usuario en la base de datos por correo electrónico
        const user = await User.findOne({ where: { email } }); // Utilizar options.where

        if (!user) {
            return "Usuario no encontrado"
        }

        // Verificar la contraseña
        if (user.password !== password) {
            return "Password Incorrect"
        }

    } catch (error) {
 return error

    }
};

module.exports = { postLogin };
