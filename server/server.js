import express from "express";
import "./database.js";
import postRoutes from "./routes/postsRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import organisationRoutes from "./routes/organisationRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", postRoutes);
app.use("/", profileRoutes);
app.use("/", organisationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
