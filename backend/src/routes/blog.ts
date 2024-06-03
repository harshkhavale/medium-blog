import { Hono } from "hono";
import {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blog";
import { verifyUser } from "../middleware";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
blogRouter.use("*", verifyUser);
blogRouter.post("/", createBlog);
blogRouter.get("/:id", getBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.put("/", updateBlog);
