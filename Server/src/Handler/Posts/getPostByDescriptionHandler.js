const getPostByDescription = require("../../controllers/Posts/getPostByDescription")

const getPostByDescriptionHandler = async (req, res) => {
    const description = req.query.description;
    try {
        const postByDescription = await getPostByDescription.getPostByDescription(description);
        res.status(201).json(postByDescription)
    } catch (error) {
        throw error
    }
}
module.exports = getPostByDescriptionHandler