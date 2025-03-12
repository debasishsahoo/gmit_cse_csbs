const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");


router.post("/signup", userController.SIGNUP);
router.post("/signin", userController.SIGNIN);
router.post("/signout", authMiddleware,userController.SIGNOUT);
router.put("/change-password",authMiddleware, userController.CHANGE_PASSWORD);
router.get("/:id", authMiddleware,userController.GET_USER_DETAILS);
router.put("/:id", authMiddleware,userController.UPDATE_USER_PROFILE);
router.delete("/:id",authMiddleware, userController.DELETE_USER_PROFILE);



module.exports = router;