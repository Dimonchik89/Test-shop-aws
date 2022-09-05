const { Router } = require("express");
const device = require("./device");
const brand = require("./brand");
const type = require("./type");
const user = require("./user");
const basket = require("./basket");

const router = new Router();

router.use("/device", device)
router.use("/brand", brand)
router.use("/type", type)
router.use("/user", user)
router.use("/basket", basket)

module.exports = router;