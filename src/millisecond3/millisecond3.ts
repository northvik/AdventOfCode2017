import {IMillisecond, InputArray} from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

// I must admit I didn't solved this one by my self
export class Millisecond3 extends BaseMillisecond implements IMillisecond {
    public solvePartOne(input: InputArray): number {
        const cell = parseInt(input[0], 10);
        if (cell === 1){
            return 0;
        }
        const ringSize = this.getClosestOddPrime(cell);
        const ringNumber = this.getRingNumber(ringSize);
        return (ringNumber - 1) + this.getDistanceFromCenter(input, ringSize);
    }

     public solvePartTwo(input: InputArray): string {
        return 'NOT SOLVED: ' + input[0];
    }

    protected getClosestOddPrime(input) {
        const nextPrime = Math.ceil(Math.sqrt(input));
        return (nextPrime % 2 === 0) ? nextPrime + 1 : nextPrime;
    };

    protected getRingNumber(input) {
        return (input + 1) / 2;
    };

    protected getDistanceFromCenter(input, ringSize){
        return Math.abs(((Math.pow(ringSize,2) - input) % (ringSize - 1)) - Math.floor(ringSize / 2));
    }

}
