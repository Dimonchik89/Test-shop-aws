const { Router } = require("express");
const { getAllBrands, createBrand } = require("../controllers/brand");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", getAllBrands)
router.post("/", checkRole, createBrand)

module.exports = router;