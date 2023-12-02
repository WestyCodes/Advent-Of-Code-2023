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

const adventOfCodeInput = readFile('./day2/input.txt');
// END OF GET FILE INPUT

console.log(adventOfCodeInput);
