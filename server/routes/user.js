import express from "express";
import passport from "passport";
import {
  getAdminStats,
  getAdminUsers,
  logout,
  myProfile,
} from "../controllers/user.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/googlelogin").get(
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.route("/login").get(
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.route("/me").get(isAuthenticated, myProfile);
router.route("/logout").get(logout);
router.get("/admin/users", isAuthenticated, isAdmin, getAdminUsers);
router.get("/admin/stats", isAuthenticated, isAdmin, getAdminStats);

export default router;
