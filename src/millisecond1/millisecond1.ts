import {IMillisecond, InputArray} from '../../Interface';

export class Millisecond1 implements IMillisecond {
    public digitList = {};

    public setList(listString: string) {
        this.digitList = {};
        for (let index = 0; index < listString.length; index++) {
            this.digitList[index] = parseInt(listString.substr(index, 1), 10);
        }
    }

    public solvePartOne(input: InputArray): number {
        this.setList(input[0]);
        let sum = 0;
        for (let index = 0; index < Object.keys(this.digitList).length; index++) {
            let next = '0';
            if (this.digitList[index + 1]) {
                next = '' + (index + 1);
            }
            if ( this.digitList[index] === this.digitList[next]) {
                sum += this.digitList[index];
            }
        }
        return sum;
    }

    public solvePartTwo(input: InputArray): number {
        this.setList(input[0]);
        let sum = 0;
        for (let index = 0; index < Object.keys(this.digitList).length; index++) {
            const listLenght = Object.keys(this.digitList).length;
            let next = index + ( listLenght / 2);
            if (!this.digitList['' + next]) {
                next = next - listLenght;
            }
            if ( this.digitList[index] === this.digitList['' + next]) {
                sum += this.digitList[index];
            }
        }
        return sum;
    }
}
