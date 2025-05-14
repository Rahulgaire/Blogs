import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./db/db.js";
import routes from "./routes/Blog.routes.js"
import cors from "cors";  
dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Fallback in case PORT is not set

// Middleware (if needed, like parsing JSON)
app.use(express.json());

app.use(cors())



app.get("/", (req, res) => {
    res.send("Hello World!");
});

// import router from './routes/user.routes.js'
app.use('/api',routes)
// app.use('/auth',router)

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(` Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Server could not connect to the database:", error);
  });