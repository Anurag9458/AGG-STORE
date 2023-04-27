import express from "express";
import { RequireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
} from "../controllers/categoryController.js";

//routes
//create category
router.post(
  "/create-category",
  RequireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put("/create-category/:id", RequireSignIn, isAdmin);

//get all category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  RequireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
