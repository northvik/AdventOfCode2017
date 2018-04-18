import { BaseMillisecond } from '../baseMillisecond';
import { IMillisecond, InputArray } from '../../Interface';

export class Millisecond9 extends BaseMillisecond implements IMillisecond {
    public solvePartOne(input: InputArray): any {
        return this.parseString(input[0]);
    }

    public solvePartTwo(input: InputArray): any {
        return this.removeGarbage(input[0]).garbage.length;
    }

    public removeGarbage(input) {
        let output = '';
        let isGarbage = false, ignored = false, garbage = '';

        for (let char of input) {
            if(ignored) {
                ignored = false;
                continue;
            }
            if (char === '!') {
                ignored = true;
                continue;
            }
            if (char === '<' && !isGarbage) {
                isGarbage = true;
                continue;
            }
            if (char === '>') {
                isGarbage = false;
                continue;
            }
            if (!isGarbage) {
                output += char;
            } else {
                garbage += char
            }
        }
        return {clean: output, garbage: garbage};
    }

    public parseString(input:string) {
        let groups = [];
        let chars = this.removeGarbage(input).clean;
        let depth = 0;
        for (let char of chars) {
            if (char === '{') {
                depth++;
            }
            if (char === '}') {
                groups.push(depth);
                depth--;
            }
        }
        return groups.reduce((a, b) => { return a + b; }, 0);
    }
}