import { Router } from "express";
import authUser from "../middlewares/authUser.middleware.js";
import { addAddress, getAddress } from "../controllers/address.controller.js";

const addressRouter = Router();

addressRouter.post('/add', authUser,addAddress)
addressRouter.post('/get', authUser,getAddress)

export default addressRouter;