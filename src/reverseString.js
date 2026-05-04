export default function reverseString (str) {
    const reverseArr = str.split('').reverse()
    return reverseArr.join('')
}