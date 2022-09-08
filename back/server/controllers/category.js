const { sequelize } = require("../../db/models/index");

const getAllCategory = async (req, res) => {
    const category = await sequelize.models.category.findAll();
    return res.status(200).json(category)
}

const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log("models", sequelize.models);
    const category = await sequelize.models.category.create({ name })
    return res.status(201).json(category)
}

const delCategory = async (req, res) => {
    const { id } = req.params;
    const category = await sequelize.models.category.destroy({ where: { id }})
    return res.status(200).json({ message: "category delete"})
}

module.exports = {
    getAllCategory,
    createCategory,
    delCategory
}