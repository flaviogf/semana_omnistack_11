import guid from "../../src/lib/guid";

describe("guid should", () => {
  it("return a string with eight characters", () => {
    expect(guid()).toHaveLength(8);
  });
});
