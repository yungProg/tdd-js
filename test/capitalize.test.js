import capitalize from "../src/capitalize";

test('returns word with first letter capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("the odin project")).toBe("The odin project");
    expect(capitalize("java")).toBe("Java")
})