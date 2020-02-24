const {
    controllerAddItem,
    controllerUpdateItem,
    controllerDeleteItem,
    controllerGetItem,
    controllerGetItemById
} = require("./controller.Item")

const router = require("express").Router();
const { checkToken } = require("../../.Auth/token.validation")

router.post("/", controllerAddItem)
router.patch("/", controllerUpdateItem)
router.delete("/", checkToken, controllerDeleteItem)
router.get("/", checkToken, controllerGetItem)
router.get("/", checkToken, controllerGetItemById)

module.exports = router;