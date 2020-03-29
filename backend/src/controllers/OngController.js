import debug from "debug";
import connection from "../database/connection";
import guid from "../lib/guid";

const OngController = {
  async index(req, res) {
    debug("be-the-hero:ong-controller")("listing the ongs");

    const ongs = await connection("ongs").select("*");

    return res.status(200).json(ongs);
  },
  async store(req, res) {
    debug("be-the-hero:ong-controller")("storing an ong");

    const { name, email, whatsapp, city, uf } = req.body;

    const id = guid();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.status(201).json({ id });
  }
};

export default OngController;
