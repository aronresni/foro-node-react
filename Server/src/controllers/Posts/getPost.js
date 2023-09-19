const { Post } = require("../../db")

const getPost = async () => {
    try {
        const posts = await Post.findAll()
        if (posts.length === 0) {
            return { error: "No hay publicaciones" };
        } else {
            return posts;
        }
    } catch (error) {
        throw error
    }
}
module.exports = { getPost };

