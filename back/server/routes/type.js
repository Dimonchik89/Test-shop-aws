const { Router } = require("express");
const { getAllTypes, createType } = require("../controllers/type");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", getAllTypes);
router.post("/", checkRole, createType)

module.exports = router;