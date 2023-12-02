// GET FILE INPUT
const fs = require('fs');

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

const adventOfCodeInput = readFile('./day1/input.txt');
// END OF GET FILE INPUT
const inputArray = adventOfCodeInput.split('\r\n');

function getDigits(string) {
    const digitsFromString = string.match(/\d/g);
    return Number(
        digitsFromString[0] + digitsFromString[digitsFromString.length - 1]
    );
}

let total = 0;

inputArray.forEach((element) => {
    total += getDigits(element);
});

console.log(total);
