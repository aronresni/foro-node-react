const fs = require('fs');
const path = require('path');

const getImagePost = async (imageName) => {
    try {
        const imagePath = path.join(__dirname, '../../../uploads', imageName);

        // Verificar si la imagen existe
        if (fs.existsSync(imagePath)) {
            // Si la imagen existe, puedes hacer lo que necesites con ella aquí
            // Por ejemplo, puedes leerla y devolverla como respuesta
            const imageBuffer = fs.readFileSync(imagePath);
            return imageBuffer;
        } else {
            // Si la imagen no existe, puedes manejar el error aquí
            throw new Error('Imagen no encontrada');
        }
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la búsqueda de la imagen
        throw error;
    }
};

module.exports = {getImagePost};
