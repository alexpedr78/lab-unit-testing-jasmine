// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("The function should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("The function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(1, 2)).toBe(2);
      expect(calculateArea(5, 20)).toBe(100);
      expect(calculateArea(32, 3)).toBe(96);
    });
    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
