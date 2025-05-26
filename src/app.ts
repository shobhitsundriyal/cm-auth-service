import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to authe service");
});

export default app;
