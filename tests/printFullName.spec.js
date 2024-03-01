// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("The function should return undefined in case the object parameter  does not take only one argument", () => {
      expect(calculateArea()).toBe(undefined);
      expect(calculateArea(1, 2)).toBe(undefined);
    });

    it("The function should return a string with the first name and the last name separated by a space", () => {
      expect(
        calculateArea((obj = { firstName: "Alexis", lastName: "Moreau" }))
      ).toBe("Alexis Moreau");
      expect(
        calculateArea((obj = { firstName: "George", lastName: "Soros" }))
      ).toBe("George Soros");
      expect(
        calculateArea((obj = { firstName: "Aladin", lastName: "Ben" }))
      ).toBe("Aladin Ben");
    });

    it("The function should return undefined in case the argument passed is not an object,", () => {
      expect(calculateArea(1)).toBe(undefined);
      expect(calculateArea("alexis")).toBe(undefined);
    });

    it("The function should return undefined In case the firstName or lastName properties are not provided", () => {
      expect(calculateArea((obj = { firstName: "", lastName: "Moreau" }))).toBe(
        undefined
      );
      expect(calculateArea((obj = { firstName: "George", lastName: "" }))).toBe(
        undefined
      );
      expect(calculateArea((obj = { firstName: "", lastName: "" }))).toBe(
        undefined
      );
    });
    it("The function should return undefined if the object does not have two properties: firstName and lastName", () => {
      expect(calculateArea.length).toBe(2);
    });
  });
});
