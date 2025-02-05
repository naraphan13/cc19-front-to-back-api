const express = require("express")
const router = express.Router()


// Import controller
const userController = require("../controllers/user-controller")






router.get("/users",userController.listUsers)
router.patch("/user/update-role",userController.updateRole)
router.delete("/user/:id",userController.deleteUser)





module.exports = router