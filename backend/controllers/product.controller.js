import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/product.model.js';
//Add product : api/product/add-product
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    const images = req.files;
    let imagesUrl = await Promise.all(
        images.map(async (image)=>{
            let result = await cloudinary.uploader.upload(image.path,{
                resource_type:'image'
            });
            return result.secure_url;
        })
    );
    console.log(imagesUrl)
    await Product.create({
        ...productData,
        images:imagesUrl
    });
    return res.status(200).json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "error during adding product" });
  }
}

//Get product : api/product/list
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
//Get specific product : api/product/id
export const productByID = async (req, res) => {
  try {
    const {id} = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    return res.status(200).json({ success: true, product });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
//Change product inStock : api/product/stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    await Product.findByIdAndUpdate(id, { inStock });
    return res.status(200).json({ success: true, message: 'Product stock updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}