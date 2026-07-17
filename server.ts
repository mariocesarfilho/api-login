import express from "express";
import userRoutes from "./src/routes/userRouter";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => console.log("Servidor rodando Http://localhost:3000"));
