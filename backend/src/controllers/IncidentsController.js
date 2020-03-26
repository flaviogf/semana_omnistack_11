import debug from "debug";
import connection from "../database/connection";

const IncidentsController = {
  async index(req, res) {
    debug("be-the-hero:incidents-controller")("listing the incidents");

    const incidents = await connection("incidents").select("*");

    return res.status(200).json(incidents);
  },
  async store(req, res) {
    debug("be-the-hero:incidents-controller")("storing an incident");

    const { title, description, value } = req.body;

    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.status(201).json({ id });
  },
  async destroy(req, res) {
    debug("be-the-hero:incidents-controller")("destroying an incident");

    const { id } = req.params;

    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (ong_id !== incident.ong_id) {
      return res.status(405).json({ error: "Operation is not allowed" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return res.status(201).send();
  }
};

export default IncidentsController;
