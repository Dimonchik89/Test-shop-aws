const { sequelize } = require("../../db/models/index");

const addProductToCart = async (req, res) => {
    // const { userId, deviceId } = req.body;
    // const basket = await sequelize.models.basket.findOne({ where: { userId }})
    // const basketDevice = await sequelize.models.basket_device.create({ basketId: basket.id, deviceId })
    // return res.status(200).json(basketDevice)
    let { products } = req.body;
    products = JSON.parse(devices);
    // devices.forEach(item => {
    //     const basket = await sequelize.models.basket.findOne({ where: { userId: item.id }})
    //     const basketDevice = await sequelize.models.basket_device.create({ basketId: basket.id, deviceId })
    // })
    for await (const item of products) {
        const cart = await sequelize.models.cart.findOne({ where: { userId: item.id }})
        const cartProduct = await sequelize.models.cart_product.create({ cartId: cart.id, productId: item.productId })
    }
    return res.status(200).json({ message: "The order has been processed"})
}

const getCartProduct = async (req, res) => {
    const { id } = req.params;
    const cart = await sequelize.models.cart.findOne({where: { userId: id }})
    const product = await sequelize.models.cart_product.findAll({ where: { carttId: cart.id }})
    return res.status(200).json(product)
}

const deleteProduct = async (req, res) => {
    const { userId, productId } = req.body;
    return res.json({ user: userId, product: productId })
}

module.exports = {
    addProductToCart,
    getCartProduct,
}