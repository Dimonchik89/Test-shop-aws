const { sequelize } = require("../../db/models/index");

const getAllBrands = async (req, res) => {
    const brands = await sequelize.models.brand.findAll();
    return res.status(200).json(brands)
}

const createBrand = async (req, res) => {
    const { name } = req.body;
    const brand = await sequelize.models.brand.create({ name })
    return res.status(201).json(brand)
}

module.exports = {
    getAllBrands,
    createBrand
}