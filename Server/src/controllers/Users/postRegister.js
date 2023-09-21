const { User } = require("../../db");

const postRegister = async (email, password, username) => {
    try {
        const newUser = new User({
            email,
            username,
            password
        })

        await newUser.save(); // Espera a que se complete la operación de guardado

        // Puedes devolver una respuesta aquí o realizar otras acciones necesarias
        return { success: true, message: `Usuario registrado correctamente, Bienvenido ${username}!` };
    } catch (error) {
        console.error(error);
        throw error; // Puedes manejar el error de otra manera si es necesario
    }
}

module.exports = { postRegister };