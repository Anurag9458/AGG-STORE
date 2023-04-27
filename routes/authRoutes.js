import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { RequireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD Post
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected user route auth
router.get("/user-auth", RequireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth
router.get("/admin-auth", RequireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", RequireSignIn, updateProfileController);

export default router;
