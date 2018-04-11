import {IMillisecond, InputArray} from '../../Interface';

export class Millisecond3 implements IMillisecond {
    public solvePartOne(input: InputArray): number {
        const cell = parseInt(input[0], 10);
        let width = 1;
        let current = 1;
        while (( current * current) < cell) {
            width = current;
            current += 2;
        }

        let ringRemainder = cell - (width * width);
        let sideRemainder = ringRemainder;

        while (ringRemainder > (width / 2) - 1) {
            sideRemainder = ringRemainder;
            ringRemainder -= (width + 1);
        }

        return sideRemainder;
    }

     public solvePartTwo(input: InputArray): string {
        return 'NOT SOLVED: ' + input[0];
    }
}
