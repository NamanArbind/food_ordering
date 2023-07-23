import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  placeorder,
  placeorderOnline,
  processOrder,
} from "../controllers/order.js";

const router = express.Router();

router.post("/createorder",isAuthenticated,placeorder);
router.post("/createorderonline",isAuthenticated, placeorderOnline);

router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
router.get("/admin/orders", isAuthenticated, isAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, isAdmin, processOrder);

export default router;
