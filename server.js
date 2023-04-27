import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send({
    message: `Welcome to Home ${process.env.REACT_APP_API}`,
  });
});

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`.bgBlue.black);
});
