import {IMillisecond, InputArray} from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

export class Millisecond4 extends BaseMillisecond implements IMillisecond {
    public solvePartOne(input: InputArray): number {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i].length > 0 && this.isTextUniq(input[i])) {
                count++;
            }
        }
        return count;
    }

    protected isTextUniq(input: string): boolean {
        const origine = input.split(' ');
        for (let index = 0; index < origine.length; index++) {
            const value = origine[index];
            delete origine[index];
            if (origine.indexOf(value) > -1) {
                return false;
            }
        }
        return true;
    }

    public solvePartTwo(input: InputArray): number {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i].length > 0 && this.isTextAndAnagramUniq(input[i])) {
                count++;
            }
        }
        return count;
    }

    protected isTextAndAnagramUniq(input: string): boolean {
        const origine = input.split(' ');
        const alphab = origine;

        alphab.forEach((val, i) => {
            alphab[i] = val.split('').sort().join('');
        });

        for (let index = 0; index < alphab.length; index++) {
            const value = alphab[index];
            delete alphab[index];
            if (alphab.indexOf(value) > -1) {
                return false;
            }
        }
        return true;
    }
}
