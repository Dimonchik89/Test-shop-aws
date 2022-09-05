const { Router } = require("express");
const { addDeviceToBasket, getBasketDevices, deleteDevice } = require("../controllers/basket");

const router = new Router();

router.post("/", addDeviceToBasket)
router.get("/:id", getBasketDevices)
// router.delete("/", deleteDevice)

module.exports = router;
