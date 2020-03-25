import connection from "../database/connection";
import { randomBytes } from "crypto";

export default {
  async index(req, res) {
    return res.json(await connection("ongs").select("*"));
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
