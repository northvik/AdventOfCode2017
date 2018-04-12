import { IMillisecond, InputArray } from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

export class Millisecond5 extends BaseMillisecond implements IMillisecond {

    public solvePartOne(input: InputArray): number {
        const maze = this.convertToInt(input);
        let pos = 0;
        let count = 0;
        while (maze[pos] !== undefined) {
            const val = maze[pos];
            maze[pos] += 1;
            pos  += val;
            count++;
        }
        return count;
    }

    public solvePartTwo(input: InputArray): number {
        const maze = this.convertToInt(input);
        let pos = 0;
        let count = 0;
        while (maze[pos] !== undefined) {
            const val = maze[pos];
            if (val >= 3) {
                maze[pos] -= 1;
            } else {
                maze[pos] += 1;
            }
            pos  += val;
            count++;
        }
        return count;
    }

    private convertToInt(input: any) {
        return input.map((x) => {
            return parseInt(x, 10);
        });
    }
}
