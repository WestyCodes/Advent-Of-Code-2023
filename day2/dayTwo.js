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

const gamesArray = adventOfCodeInput.split('\r\n');

let total = 0;

gamesArray.forEach((line) => {
    const highScores = {
        red: 12,
        green: 13,
        blue: 14,
    };

    const [game, results] = line.split(': ');
    const gameID = Number(game.split(' ')[1]);
    const rounds = results.split('; ');

    let impossible = false;
    for (const round of rounds) {
        const dicePulls = round.split(', ');

        for (const result of dicePulls) {
            const [amount, colour] = result.split(' ');

            if (Number(amount) > highScores[colour]) {
                impossible = true;
            }
        }
    }
    return impossible ? true : (total += gameID);
});

console.log(total);
