const { Post } = require("../../db")
const { Op } = require("sequelize");

const getPostByDescription = async (description) => {
    try {
        const posts = await Post.findAll({
            where: {
                description: { [Op.iLike]: `%${description}%` }
            }
        })
        return posts
    } catch (error) {
        throw error
    }

}
module.exports = { getPostByDescription }