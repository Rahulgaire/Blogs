import {
  getAllBlog,
  createBlog,
  deleteAllBlog,
  deleteOneBlog,
  updateBlog,
} from "../controllers/Blog.controllers.js";
import {createUser,loginUser} from "../controllers/Register.controllers.js";
import express from "express";
const routes = express.Router();
routes.get("/", getAllBlog);
routes.post("/", createBlog);
routes.delete("/", deleteAllBlog);
routes.delete("/:id", deleteOneBlog);
routes.put("/:id", updateBlog);
routes.post("/register", createUser), 
routes.post("/login", loginUser);
export default routes;