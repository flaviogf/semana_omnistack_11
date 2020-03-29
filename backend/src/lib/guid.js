import crypto from "crypto";

function guid() {
  return crypto.randomBytes(4).toString("hex");
}

export default guid;
