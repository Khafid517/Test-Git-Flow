const {
    controllerAddUser,
    controllerGetUsers,
    controllerGetUsersById,
    controllerUpdateUser,
    controllerDeleteUser,
    controllerLogin 
} = require("./controller.User");

const router = require("express").Router();
const {checkToken} = require("../../.Auth/token.validation")

router.post("/", controllerAddUser);
router.get("/", checkToken, controllerGetUsers);
router.get("/", checkToken, controllerGetUsersById);
router.patch("/", checkToken, controllerUpdateUser);
router.delete("/", checkToken, controllerDeleteUser);
router.post("/login", controllerLogin)

module.exports = router;