import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ opa: "Deu certo!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`PORTA: ${process.env.PORT}`);
});
