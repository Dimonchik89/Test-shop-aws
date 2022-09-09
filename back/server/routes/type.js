const { Router } = require("express");
const { getAllTypes, createType, delType, updateType, getOneType } = require("../controllers/type");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", getAllTypes);
router.post("/", checkRole, createType)
router.delete("/:id", checkRole, delType)
router.put("/:id", checkRole, updateType)
router.get("/:id", getOneType)

module.exports = router;