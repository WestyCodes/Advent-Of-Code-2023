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
// PART ONE
const inputArray = adventOfCodeInput.split('\r\n');

function getDigits(line) {
    const nums = line.match(/\d/g);
    return Number(nums[0] + nums[nums.length - 1]);
}

// PART TWO

function getAllDigits(line) {
    const numMap = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    const nums = line
        .replace('oneight', 'oneeight')
        .replace('twone', 'twoone')
        .replace('threeight', 'threeeight')
        .replace('fiveight', 'fiveeight')
        .replace('sevenine', 'sevennine')
        .replace('nineight', 'nineeight')
        .replace('eighthree', 'eightthree')
        .replace('eightwo', 'eighttwo')
        .match(
            /(?:one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9)/g
        );

    let num = nums[0].length > 1 ? numMap[nums[0]] : nums[0];

    if (nums.length === 1) {
        num += num;
    }

    if (nums.length > 1) {
        num +=
            nums[nums.length - 1].length > 1
                ? numMap[nums[nums.length - 1]]
                : nums[nums.length - 1];
    }

    return Number(num);
}

let total = 0;

// Part One Total Finder
// inputArray.forEach((element) => {
//     total += getDigits(element);
// });

// Part Two Total Finder
inputArray.forEach((element) => {
    total += getAllDigits(element);
});

console.log(total);
