const { sequelize } = require("../../db/models/index");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const getAllProduct = async (req, res) => {
    let { limit, page, ...tail } = req.query
    limit = limit || 9;
    page = page || 1;
    let offset = page * limit;
    const devices = await sequelize.models.device.findAndCountAll({ where: { offset, limit, ...tail }});
    return res.status(200).json(devices)
}

const getOneProduct = async (req, res) => {
    const { id } = req.params;
    const product = await sequelize.models.product.findOne({ where: { id }})
    return req.status(200).json(product)
}

const createProduct = async (req, res) => {
    let imgNameArr = [];
    
    try {
        const { name, cost, categoryId, typeId, info } = req.body;

        req.files?.forEach(item => {
            imgNameArr.push(item.key)
        })

        const product = await sequelize.models.product.create({name, cost, img: JSON.stringify(imgNameArr), categoryId, typeId})

        if(info) {
            info = JSON.parse(info);
            info.forEach(item => {
                sequelize.models.product_info.create({
                    productId: product.id,
                    title: item.title,
                    description: item.description
                })
            })
        }
        return res.status(201).json(product);

    } catch(e) {
        throw new Error(e.message)
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const oldProduct = await sequelize.models.product.findOne({ where: { id }})
    if(!oldProduct) {
        return res.status(400).json({ message: "Device is not defined" })
    }
    const product = await sequelize.models.product.destroy({ where: { id }})
    return res.status(200).json({ message: `Delete device ${id}`})
}


module.exports = {
    getAllProduct,
    getOneProduct,
    createProduct,
    deleteProduct
}

// domain = d5485ac7gokgy.cloudfront.net
// https://newtechshop.s3.eu-north-1.amazonaws.com/1662113878709