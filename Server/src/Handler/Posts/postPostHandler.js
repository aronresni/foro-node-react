const upload = require("../../routes/postRouter").upload; // Importa el upload configurado en routes.js
const postPost = require("../../controllers/Posts/postPost");



const postPostHandler = async (req, res) => {
    try {


                const { description, username } = req.body;
                const image = req.file ? req.file.filename : null; // Access the uploaded image from req.file

                // Now you can proceed to create the post with description, username, and image
                const createPost = await postPost.postPost(description, image, username);
                res.status(200).json(createPost);
    } catch (error) {
        res.status(400).json({ error: 'Hubo un error al crear la publicación' });
    }
};

module.exports = postPostHandler