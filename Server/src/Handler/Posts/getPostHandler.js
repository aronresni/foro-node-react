const getPost = require("../../controllers/Posts/getPost")

const getPostHandler = async (req, res) => {
    try {
        const post = await getPost.getPost();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = getPostHandler;