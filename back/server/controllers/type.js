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

const delType = async (req, res) => {
    const { id } = req.params;
    const type = await sequelize.models.type.destroy({where: { id }})
    return res.status(200).json({ message: "type destroy" })
}

const getOneType = async (req, res) => {
    const { id } = req.params;
    const type = await sequelize.models.type.findOne({ where: { id }})
    return res.status(200).json(type)
}

const updateType = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    let type = await sequelize.models.type.update({ name }, { where: { id }})
    return res.status(200).json(type)
}

module.exports = {
    getAllTypes,
    createType,
    delType,
    getOneType,
    updateType
}