const { Router } = require("express");
const { loginUser, createUser, deleteUser, check, getAllUser, getOneUser, updateUser } = require("../controllers/user");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.post("/login", loginUser)
router.post("/register", (req, res, next) => {
    console.log(" =====================", req);
    next()
}, createUser)
router.delete("/:id", checkRole, deleteUser)
router.get("/check", auth, check)
router.get("/", getAllUser)
router.get("/:id", getOneUser)
router.put("/:id", checkRole, updateUser)

module.exports = router;