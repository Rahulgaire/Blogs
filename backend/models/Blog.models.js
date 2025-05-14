import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [ " ", "Health", "Technology","Smart Cities" ],
      required: true,
    },
    coverImage: {
      type: String,
      required: true,    
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Fixed typo here
  }
);

const Blog = mongoose.model("Blog", blogSchema); // Changed model name to "Blog" for clarity
export default Blog;