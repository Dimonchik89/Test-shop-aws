const { Router } = require("express");
const { getAllCategory, createCategory, delCategory } = require("../controllers/category");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", getAllCategory)
router.post("/", checkRole, createCategory)
router.delete("/:id", checkRole, delCategory)

module.exports = router;