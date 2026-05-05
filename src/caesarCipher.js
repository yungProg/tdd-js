export default function caesarCipher (str, shift) {
    let encrypted = ''
    const strArr = str.split('')

    strArr.forEach(character => {
        const characterCodeNumber = character.charCodeAt()
        if (characterCodeNumber > 64 && characterCodeNumber < 91) {
            let shiftedCharacterCode = (characterCodeNumber + shift) % 91
            shiftedCharacterCode = shiftedCharacterCode < 65 ? shiftedCharacterCode += 65 : shiftedCharacterCode
            encrypted += String.fromCharCode(shiftedCharacterCode)
        } else if (characterCodeNumber > 96 && characterCodeNumber < 123) {
            let shiftedCharacterCode = (characterCodeNumber + shift) % 123
            shiftedCharacterCode = shiftedCharacterCode < 97 ? shiftedCharacterCode += 97 : shiftedCharacterCode
            encrypted += String.fromCharCode(shiftedCharacterCode)
        } else {
            encrypted += character
        }
    });
    return encrypted
}