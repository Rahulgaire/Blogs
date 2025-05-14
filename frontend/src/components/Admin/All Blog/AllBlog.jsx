import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllBlog.css";
function AllBlog() {
  const [bValue, setBValue] = useState([]);
  const fetchapi = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/");
      console.log(response.data.msg);
      setBValue(response.data.blog);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/${id}`);
      fetchapi();
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          {bValue.length > 0 ? (
            bValue.map((blogging, index) => (
              <div key={index}>
                <div className="item">
                  <h2>{blogging.title}</h2>
                  <p>{blogging.description}</p>
                  <img src={blogging.coverImage} alt="Blog" />
                  <p>{blogging.category}</p>
                  <p>{blogging.author}</p>
                  <button onClick={handleDelete} className="delete-btn">Delete</button>
                  <button>Edit</button>
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

export default AllBlog;
