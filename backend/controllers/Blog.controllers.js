import Blog from "../models/Blog.models.js";
//  Get All Blogs
export const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      msg: "Data Found Successfully",
      blog, 
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
  
//  Create a Blog
export const createBlog = async (req, res) => {
  const { title, description, coverImage ,category,author} = req.body;
  try {
    const blog = new Blog({ title, description, coverImage ,category,author});
    await blog.save();
    res.status(201).json({
      msg: "Added Successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//  Delete All Blogs
export const deleteAllBlog = async (req, res) => {
  try {
    const blog = await Blog.deleteMany();
    res.status(200).json({
      msg: "All Blogs Deleted Successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//  Delete One Blog
export const deleteOneBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(200).json({
      msg: "Blog Deleted Successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//  Update Blog
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description, coverImage ,category,author} = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, description, coverImage ,category,author},
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(200).json({
      msg: "Blog Updated Successfully",
      blog
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getByCategory = async (req,res) => {
  const {id} = req.params;
  try {
     const newBlogs = await Blog.findById(id)
     if(newBlogs){
      res.status(409).json({
        msg:"No Blog Data Available",
        newBlogs
      })
    }
    
    res.status(201).json({
      msg:"Blog Fetched Successfully",
      newBlogs
    })
  } catch (error) {
    res.status(500).json({
      msg:"Server Error"
    })
    
  }
}