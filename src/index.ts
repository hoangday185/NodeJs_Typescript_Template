import express from "express";
const app = express();

app.get("/", () => {
  console.log("ngon");
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
