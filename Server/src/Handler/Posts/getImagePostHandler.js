const getImagePost = require("../../controllers/Posts/getImagePost")


const getImagePostHandler = async (req, res) => {
    const imageName = req.params.imageName; // Cambia req.body a req.params
    try {
        const imagePost = await getImagePost.getImagePost(imageName);
        // Asegúrate de configurar el tipo de contenido adecuado según el formato de la imagen
        res.setHeader('Content-Type', 'image/jpeg'); // Cambia 'image/jpeg' según corresponda
        res.status(200).send(imagePost);
    } catch (error) {
        res.status(404).json({ error: 'Imagen no encontrada' });
    }
}
module.exports = getImagePostHandler