import { IMillisecond, InputArray } from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

export class Millisecond6 extends BaseMillisecond implements IMillisecond {

    protected tested: string[];
    protected banks: number[];

    public solvePartOne(input: InputArray): any {
        this.banks = this.convertToInt(input);
        const inputLastIndex = this.banks.length - 1;
        this.tested = [];
        let stepCount = 0;
        let highestIndex = 0;
        while (this.tested.indexOf(this.banks.join(',')) < 0) {
            this.tested.push(this.banks.join(','));

            highestIndex = this.getHeighestNumberIndex(this.banks);
            let numBlocks = this.banks[highestIndex];

            this.banks[highestIndex] = 0;
            let i = (highestIndex + 1);

            while ( numBlocks > 0) {
                if ( i > inputLastIndex) {
                    i = 0;
                }
                this.banks[i]++;
                numBlocks--;
                i++;
            }
            stepCount++;
        }
        this.tested.push(this.banks.join(','));
        return stepCount;
    }

    public solvePartTwo(input: InputArray): any {
        const steps = this.solvePartOne(input);
        return steps - this.tested.indexOf(this.tested[steps]);
    }

    private getHeighestNumberIndex(input: InputArray) {
        let max = -100;
        let index = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > max) {
                max = input[i];
                index = i;
            }
        }
        return index;
    }

    private convertToInt(input: any) {
        return input.map((x) => {
            return parseInt(x, 10);
        });
    }
}
