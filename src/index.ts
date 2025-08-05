import express from "express";
import authRouter from "./routes/auth.route";
const app = express();

app.get("/", () => {
  console.log("ngon");
});

app.use(express.json());
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
