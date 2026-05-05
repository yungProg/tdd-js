import caesarCipher from "../src/caesarCipher";

test("shifts each letter by 3", () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})

test("wraps characters", () => {
    expect(caesarCipher('xyz', 5)).toBe('cde');
})