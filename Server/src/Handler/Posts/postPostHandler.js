const postPost = require("../../controllers/Posts/postPost")



const postPostHandler = async (req, res) => {
    try {
        const { description, image } = req.body
        const id = req.query.id;
        const createPost = await postPost.postPost(description, image, id)
        res.status(200).json(createPost)
    } catch (error) {
        res.status(400).json({ error: "Hubo un error a l crear la publicación" });
    }
}
module.exports = postPostHandler