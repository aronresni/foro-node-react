const { Post } = require("../../db")

const postPost = async (description, image, id, user) => {
    try {
        const post = await Post.create({
            username,
            description,
            image,
            id,
      
        })
        return post
    } catch (error) {
        console.error("Error al crear la publicación:", error);
        throw error;
    }
}


module.exports = { postPost }