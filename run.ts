import fs = require('fs-extra');
import { Millisecond1 } from './src/millisecond1/millisecond1';
import { Millisecond2 } from './src/millisecond2/millisecond2';
import { Millisecond3 } from './src/millisecond3/millisecond3';
import { Millisecond4 } from './src/millisecond4/millisecond4';
import { Millisecond5 } from './src/millisecond5/millisecond5';
import { Millisecond6 } from './src/millisecond6/millisecond6';
import { Millisecond7 } from './src/millisecond7/millisecond7';
import { Millisecond8 } from './src/millisecond8/millisecond8';
import { Millisecond9 } from './src/millisecond9/millisecond9';
import { Millisecond10 } from './src/millisecond10/millisecond10';

let contents, millisecond, list;

const constructors = {
    Millisecond1: Millisecond1,
    Millisecond2: Millisecond2,
    Millisecond3: Millisecond3,
    Millisecond4: Millisecond4,
    Millisecond5: Millisecond5,
    Millisecond6: Millisecond6,
    Millisecond7: Millisecond7,
    Millisecond8: Millisecond8,
    Millisecond9: Millisecond9,
    Millisecond10: Millisecond10
};

// tslint:disable-next-line
console.log('\n\n############### CAPTCHA RESULT ###############\n');

for (let i = 1; i <= Object.keys(constructors).length; i++) {
    contents = fs.readFileSync('./src/millisecond' + i + '/input.txt').toString();
    list = contents.split('\n');
    millisecond = new constructors['Millisecond' + i]();
// tslint:disable-next-line
    console.log('Millisecond ' + i + ':');
// tslint:disable-next-line
    console.log('     Part 1: ' + millisecond.solvePartOne(list) + '\n     Part 2: NOT SOLVED' +millisecond.solvePartTwo(list));
}
