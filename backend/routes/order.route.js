import { Router } from "express";
import authUser from "../middlewares/authUser.middleware.js";
import { getAllOrders, getUserOrder, placeOrderCOD } from "../controllers/order.controller.js";
import authSeller from "../middlewares/authSeller.middleware.js";

const orderRouter = Router();

orderRouter.post('/cod',authUser, placeOrderCOD)
orderRouter.get('/user',authUser, getUserOrder)
orderRouter.get('/seller', authSeller, getAllOrders)

export default orderRouter;