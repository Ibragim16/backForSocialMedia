const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const avatarLoadMiddleware = require("../middlewares/avatars.middleware");
const applyMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/user", userController.getUser);
router.get("/users", userController.getUsers);

router.post("/user/signup", userController.registerUser);
router.post("/user/signin", userController.loginUser);

router.patch(
  "/user",
  applyMiddleware,
  avatarLoadMiddleware.single("avatar"),
  userController.editUser
);
router.patch("/add/freind", applyMiddleware, userController.addFreind);
router.patch("/add/freind", applyMiddleware, userController.removeFreind);

module.exports = router;
