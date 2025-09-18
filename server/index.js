import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors()); 

const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Server root works!");
});

app.get("/posts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
