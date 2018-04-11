import {IMillisecond, InputArray} from '../../Interface';

export class Millisecond2 implements IMillisecond {
    public grid: {};

    public setMatrix(matrixRows) {
        this.grid = {};
        for (let index = 0; index < matrixRows.length; index++) {
            const matrixRow = [];
            matrixRows[index].split(',').forEach(element => {
                matrixRow.push(parseInt(element, 10));
            });
            this.grid[index] = matrixRow;
        }
    }

    public getGridOfSum() {
        const gridOfSum = {};
        for (let index = 0; index < Object.keys(this.grid).length; index++) {
            let max = 0;
            let min = 10000000000;
            this.grid[index].forEach(element => {
                if (max < element) { max = element; }
                if (min > element) { min = element; }
            });
            if (min < max ) {
                gridOfSum[index] = max - min;
            }
        }
        return gridOfSum;
    }

    public getGridOfDivide() {
        const gridOfDivision = {};
        for (let row = 0; row < Object.keys(this.grid).length; row++) {
              for (let indexDivid = 0; indexDivid < this.grid[row].length; indexDivid++) {
                for (let indexDivider = 0; indexDivider < this.grid[row].length; indexDivider++) {
                    const modulo = this.grid[row][indexDivid] % this.grid[row][indexDivider];
                    if (indexDivid !== indexDivider && modulo === 0) {
                        gridOfDivision[row] = this.grid[row][indexDivid] / this.grid[row][indexDivider];
                    }
                }
            }
        }
        return gridOfDivision;
    }

    public solvePartOne(input: InputArray): number {
        this.setMatrix(input);
        let checkSum = 0;
        const gridOfSum = this.getGridOfSum();
        for (let index = 0; index < Object.keys(gridOfSum).length; index++) {
            checkSum += gridOfSum[index];
        }
        return checkSum;
    }

    public solvePartTwo(input: InputArray): number {
        this.setMatrix(input);
        let divSum = 0;
        const gridOfDivision = this.getGridOfDivide();
        for (let index = 0; index < Object.keys(gridOfDivision).length; index++) {
            divSum += gridOfDivision[index];
        }
        return divSum;
    }
}

