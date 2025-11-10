const fs = require('fs');

const data = fs.readFileSync(
    '1.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);
const cleaned = data.replaceAll(',', '' );
const words = cleaned.split(/\s+/);
const firstHundr = words.slice(0,100);
console.log(firstHundr.join(''));
console.log('\n----------------------\n');
firstHundr.forEach(word => console.log(word) );
