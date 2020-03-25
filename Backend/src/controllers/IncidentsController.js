import connection from "../database/connection";

export default {
  async index(req, res) {
    return res.json(await connection("onincidentsgs").select("*"));
  },

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });
    return res.json({ id });
  },
};
