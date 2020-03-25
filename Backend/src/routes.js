import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ opa: "Deu certo!" });
});

export default routes;
