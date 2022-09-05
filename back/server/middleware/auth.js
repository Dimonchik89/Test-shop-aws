var jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let token = req.headers?.authorization;
    if(!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    token = token.split(" ")[1]
    const user = jwt.verify(token, process.env.TOKEN_KEY)
    if(!user) {
        return res.status(400).json({ message: "Token not found" })
    }
    req.user = user
    next()
}

module.exports = auth