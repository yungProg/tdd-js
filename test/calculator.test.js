import calculator from "../src/calculator"

test('adds 3 and 9 and returns 12', () => {
    expect(calculator().add(3, 9)).toEqual(12)
})

test('subtracts 13 from 9 and returns -4', () => {
    expect(calculator().subtract(9, 13)).toEqual(-4)
})

test('multiplies 11 and 3 and returns 33', () => {
    expect(calculator().multiply(11, 3)).toEqual(33)
})

test('divides 14 by 7 and returns 2', () => {
    expect(calculator().divide(14, 7)).toEqual(2)
})
