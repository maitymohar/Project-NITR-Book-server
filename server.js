import express from "express";
import "./database.js";
import postRoutes from "./routes/postsRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
