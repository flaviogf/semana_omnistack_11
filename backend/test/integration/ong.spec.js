import request from "supertest";
import connection from "../../src/database/connection";
import app from "../../src/app";

describe("ong should", () => {
  afterAll(async () => {
    await connection.destroy();
  });

  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.migrate.rollback();
  });

  it("return an id when a ong is created", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "ONG 1",
        email: "contact@ong.com",
        whatsapp: "16000000000",
        city: "Franca",
        uf: "SP"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
