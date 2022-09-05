const { sequelize } = require("../../db/models/basket");

const addDeviceToBasket = async (req, res) => {
    // const { userId, deviceId } = req.body;
    // const basket = await sequelize.models.basket.findOne({ where: { userId }})
    // const basketDevice = await sequelize.models.basket_device.create({ basketId: basket.id, deviceId })
    // return res.status(200).json(basketDevice)
    let { devices } = req.body;
    devices = JSON.parse(devices);
    // devices.forEach(item => {
    //     const basket = await sequelize.models.basket.findOne({ where: { userId: item.id }})
    //     const basketDevice = await sequelize.models.basket_device.create({ basketId: basket.id, deviceId })
    // })
    for await (const item of devices) {
        const basket = await sequelize.models.basket.findOne({ where: { userId: item.id }})
        const basketDevice = await sequelize.models.basket_device.create({ basketId: basket.id, deviceId: item.deviceId })
    }
    return res.status(200).json({ message: "The order has been processed"})
}

const getBasketDevices = async (req, res) => {
    const { id } = req.params;
    const basket = await sequelize.models.basket.findOne({where: { userId: id }})
    const devices = await sequelize.models.basket_device.findAll({ where: { basketId: basket.id }})
    return res.status(200).json(devices)
}

const deleteDevice = async (req, res) => {
    const { userId, deviceId } = req.body;
    return res.json({ user: userId, device: deviceId })
}

module.exports = {
    addDeviceToBasket,
    getBasketDevices,
}