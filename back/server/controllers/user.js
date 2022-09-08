const { sequelize } = require("../../db/models/index");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (id, email, role) => {
    return jwt.sign(
        {
            id,
            email,
            role
        },
        process.env.TOKEN_KEY,
        { expiresIn: "24h" }
    )
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: "fields are not filled" })
    }

    const user = await sequelize.models.user.findOne({ where: { email }})
    
    if(user && (await bcrypt.compare(password, user.password))) {
        const token = createToken(user.id, user.email, user.role)
        return res.status(200).json({token})
    }

    if(user && !(await bcrypt.compare(password, user.password))) {
        return res.status(406).json({ message: "Invalid password" })
    }

    return res.status(406).json({ message: "User not found" })
}

const createUser = async (req, res) => {
    const { email, password, role="USER" } = req.body;
    
    if(!email || !password) {
        return res.status(400).json({ message: "fields are not filled"})
    }
    const oldUser = await sequelize.models.user.findOne({ where: { email }})

    if(oldUser) {
        return res.status(400).json({ message: "User already exist" })
    }

    const cryptPassword = await bcrypt.hash(password, 10);

    const user = await sequelize.models.user.create({ email, password: cryptPassword, role })
    const cart = await sequelize.models.cart.create({ userId: user.id })
    const token = createToken(user.id, user.email, user.role)

    return res.status(201).json({token})
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await sequelize.models.user.findOne({ where: { id }});
    if(!user) {
        return res.status(406).json({ message: "User not found" })
    }
    const delUser = await sequelize.models.user.destroy({ where: { id }});
    const delCart = await sequelize.models.cart.destroy({ where: { userId: id }})
    if(!!delUser) {
        return res.status(200).json({ message: "Ok"})
    }
        return res.status(400).json({ message: "Error"})
}

const getAllUser = async (req, res) => {
    const users = await sequelize.models.user.findAll();
    // res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count')
    return res.status(200).json(users)
}

const check = (req, res) => {
    const { id, email, role } = req?.user;
    const token = createToken(id, email, role)
    return res.status(200).json({token})
}

module.exports = {
    loginUser,
    createUser,
    deleteUser,
    check,
    getAllUser
}