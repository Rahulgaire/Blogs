import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import "./Details.css"
function Details() {
    const [blog, setBlog] = useState([]);

    const fetchapi = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/");
            console.log(response.data.msg);
            setBlog(response.data.blog);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchapi();
    }, []);

    return (
        <>
            
        <div className="main">
            <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {blog.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td>{item.author}</td> {/* Fixed typo: 'autor' to 'author' */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Details;