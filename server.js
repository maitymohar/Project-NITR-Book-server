import express from "express";
import "./database.js";
import postRoutes from "./routes/postsRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", postRoutes);
app.use("/", profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
