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

const getOneCategory = async (req, res) => {
    const { id } = req.params;
    const category = await sequelize.models.category.findOne({ where: { id }})
    return res.status(200).json(category)
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await sequelize.models.category.update({ id, name }, { where: { id } })
    const newCategory = await sequelize.models.category.findOne({ where : { id }})
    return res.json({data: newCategory})
}

module.exports = {
    getAllCategory,
    createCategory,
    delCategory,
    getOneCategory,
    updateCategory
}