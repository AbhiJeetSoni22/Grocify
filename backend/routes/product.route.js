import { Router } from "express";
import { upload } from "../configs/multer.js";
import authSeller from "../middlewares/authSeller.middleware.js";
import { addProduct, changeStock, productByID, productList } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post('/add',upload.array([images]),authSeller,addProduct);
productRouter.get('/list',productList);
productRouter.get('/id',productByID);
productRouter.post('/stock',authSeller,changeStock);

export default productRouter;