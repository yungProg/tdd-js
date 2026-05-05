import reverseString from "../src/reverseString";

test('it reverse input string', () => {
    expect((reverseString('hello'))).toBe('olleh');
    expect((reverseString('my cat'))).toBe("tac ym");
    expect(reverseString('topper . ')).toBe(' . reppot')
})