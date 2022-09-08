const { Router } = require("express");
const { loginUser, createUser, deleteUser, check, getAllUser } = require("../controllers/user");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.post("/login", loginUser)
router.post("/register", createUser)
router.delete("/:id", checkRole, deleteUser)
router.get("/check", auth, check)
router.get("/", getAllUser)

module.exports = router;