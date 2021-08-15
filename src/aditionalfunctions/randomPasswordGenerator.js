export const generatePassword = (min = 8, max = 16) => {
    let length = Math.floor(Math.random() * (max - min)) + min;

    let password = ''

    for (let i = 0; i < length; i++)
        password += String.fromCharCode(Math.floor(Math.random() * (126 - 32)) + 32);

    return password
}