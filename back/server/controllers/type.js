const { sequelize } = require("../../db/models/index");

const getAllTypes = async (req, res) => {
    const types = await sequelize.models.type.findAll();
    return res.status(200).json(types);
}

const createType = async (req, res) => {
    const { name } = req.body;
    const type = await sequelize.models.type.create({ name });
    return res.status(201).json(type);
}

module.exports = {
    getAllTypes,
    createType
}