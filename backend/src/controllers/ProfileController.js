import debug from "debug";
import connection from "../database/connection";

const ProfileController = {
  async index(req, res) {
    debug("be-the-heror:profile-controller")("listing incidents of a profile");

    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.status(200).json(incidents);
  }
};

export default ProfileController;
