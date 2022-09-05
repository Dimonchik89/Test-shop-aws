const { sequelize } = require("../../db/models/index");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const getAllDevices = async (req, res) => {
    let { limit, page, ...tail } = req.query
    limit = limit || 9;
    page = page || 1;
    let offset = page * limit;
    const devices = await sequelize.models.device.findAndCountAll();
    return res.status(200).json(devices)
}

const getOneDevice = async (req, res) => {
    const { id } = req.params;
    const device = await sequelize.models.device.findOne({ where: { id }})
    return req.status(200).json(device)
}

const createDevice = async (req, res) => {
    let imgNameArr = [];
    
    try {
        const { name, cost, brandId, typeId, info } = req.body;

        req.files?.forEach(item => {
            imgNameArr.push(item.key)
        })

        const device = await sequelize.models.device.create({name, cost, img: JSON.stringify(imgNameArr), brandId, typeId})

        if(info) {
            info = JSON.parse(info);
            info.forEach(item => {
                sequelize.models.device_info.create({
                    deviceId: device.id,
                    title: item.title,
                    description: item.description
                })
            })
        }
        return res.status(201).json(device);

    } catch(e) {
        throw new Error(e.message)
    }
}

const deleteDevice = async (req, res) => {
    const { id } = req.params;
    const oldDevice = await sequelize.models.device.findOne({ where: { id }})
    if(!oldDevice) {
        return res.status(400).json({ message: "Device is not defined" })
    }
    const device = await sequelize.models.device.destroy({ where: { id }})
    return res.status(200).json({ message: `Delete device ${id}`})
}


module.exports = {
    getAllDevices,
    getOneDevice,
    createDevice,
    deleteDevice
}

// domain = d5485ac7gokgy.cloudfront.net
// https://newtechshop.s3.eu-north-1.amazonaws.com/1662113878709