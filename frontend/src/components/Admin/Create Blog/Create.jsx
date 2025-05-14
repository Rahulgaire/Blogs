import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
function Create() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    coverImage: "",
    category: "",
    author: "",
  });
  const handleChange =  (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/",form);
      alert(res.data.msg || "Blog Created Successfully");
      console.log(res.data);
      setForm({
        title: "",
        description: "",
        coverImage: "",
        category: "",
        author: "",
      });
    } catch (error) {
      console.log("Failed to create vlog");
      alert(error.res.data.error);
    }
  };
  return (
    <>
      <div className="create-container">
        
  <div className="create-text">
    <h2>Create a New Blog</h2>
    <p>
      Share your thoughts, experiences, or insights with the world. Fill out the form to publish your latest blog post.
    </p>
  </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={form.title}
          required
          />
          <br />
          <label htmlFor="description">Desciption :</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            value={form.description}
          required
          />
          <br />
          <label htmlFor="category">Category :</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={form.category}
            required
          />
          <br />
          <label htmlFor="author">Author :</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            value={form.author}
            required
          />
          <br />
          <label htmlFor="coverImage">Cover Image URL :</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            onChange={handleChange}
            value={form.coverImage}
            required
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Create;
