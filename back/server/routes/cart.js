const { Router } = require("express");
const { addProductToCart, getCartProduct } = require("../controllers/cart");

const router = new Router();

router.post("/", addProductToCart)
router.get("/:id", getCartProduct)
// router.delete("/", deleteProduct)

module.exports = router;
