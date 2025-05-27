import app from "./src/app";
import { calculateDiscount } from "./src/utils";
import request from "supertest";

describe("App", () => {
  it("should give the discount amount", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(10);
  });

  it("should return status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
