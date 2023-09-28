const postPost = require("../../controllers/Posts/postPost")



const postPostHandler = async (req, res) => {
    try {
        const { description, image, username } = req.body
        
        const createPost = await postPost.postPost(description, image, username)
        res.status(200).json(createPost)
    } catch (error) {
        res.status(400).json({ error: "Hubo un error al crear la publicación" });
    }
}
module.exports = postPostHandler