export default function calculator () {
    const add = (a, b) => a + b;

    const subtract = (a, b) => a - b;

    const multiply = (a, b) => a * b;

    const divide = (a, b) => {
        return a / b
    }

    return { add, subtract, multiply, divide }
}