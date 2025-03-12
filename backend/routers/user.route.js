const router = require("express").Router();
const userController = require("../controllers/user.controller");


router.post("/signup", userController.SIGNUP);
router.post("/signin", userController.SIGNIN);
router.post("/signout", userController.SIGNOUT);
router.put("/change-password", userController.CHANGE_PASSWORD);
router.get("/:id", userController.GET_USER_DETAILS);
router.put("/:id", userController.UPDATE_USER_PROFILE);
router.delete("/:id", userController.DELETE_USER_PROFILE);



module.exports = router;