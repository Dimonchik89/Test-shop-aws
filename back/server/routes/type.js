const { Router } = require("express");
const { getAllTypes, createType, delType } = require("../controllers/type");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", getAllTypes);
router.post("/", checkRole, createType)
router.delete("/:id", checkRole, delType)

module.exports = router;