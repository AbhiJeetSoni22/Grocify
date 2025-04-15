import { Router } from "express";
import { updateCart } from "../controllers/cart.controller.js";

const cartRouter = Router();
cartRouter.post('/update',updateCart);