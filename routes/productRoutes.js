import express from "express";
import { RequireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

import formidable from "express-formidable";
import {
  createProductController,
  deleteProuctController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

//routes

//create product
router.post(
  "/create-product",
  RequireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  RequireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get all products
router.get("/get-product", getProductController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProuctController);

//filter product
router.post("/product-filters", productFilterController);

//product-count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//related products
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);
export default router;
