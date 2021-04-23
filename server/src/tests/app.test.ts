import request from "supertest";
import app from "../app";

describe("ping server", () => {
  it("should return a status code of 200", async (done) => {
    const res = await request(app).post("/ping");
    expect(res.status).toBe(200);
    done();
  });

  it("should return a json response", async (done) => {
    const res = await request(app).post("/ping");
    expect(res.body).toEqual("pong");
    done();
  });
});
