import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";
function Blogs() {
  const [bValue, setBValue] = useState([]);
  const categories = ["All", ...new Set(bValue.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchapi = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/");
      console.log(response.data.msg);
      setBValue(response.data.blog);
    } catch (error) {
      console.error(error.message);
    }
  };

  const filterProducts = bValue.filter((item) => {
    if (selectedCategory === "All") {
      return bValue;
    }

    return selectedCategory === item.category;
  });

  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="blogs-btn-types">
          {categories.map((item) => (
            <button onClick={() => setSelectedCategory(item)}>{item}</button>
          ))}
        </div>

        <div className="card">
          {bValue.length > 0 ? (
            filterProducts.map((blogging, index) => (
              <div key={index}>
                <div className="item">
                  <h2>{blogging.title}</h2>
                  <p>{blogging.description}</p>
                  <img src={blogging.coverImage} alt="Blog" />
                  <p>{blogging.category}</p>
                  <p>{blogging.author}</p>
                </div>
              </div>
            ))
          ) : (
            <h2>There is no blog on this page</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Blogs;
