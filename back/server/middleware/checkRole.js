const jwt = require('jsonwebtoken');

const checkRole = (req, res, next) => {
    let token = req.headers?.authorization;
    if(!token) {
        return res.status(403).json({ message: "Forbidden" })
    }
    token = token.split(" ")[1];
    const user = jwt.verify(token, process.env.TOKEN_KEY)
    if(user.role !== "ADMIN") {
        return res.status(403).json({ message: "Forbidden" })
    }
    next()
}

module.exports = checkRole