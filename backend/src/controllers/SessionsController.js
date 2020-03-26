import connection from "../database/connection";

const SessionController = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(401).json({ error: "This ONG was not found" });
    }

    return res.status(200).json(ong);
  }
};

export default SessionController;
