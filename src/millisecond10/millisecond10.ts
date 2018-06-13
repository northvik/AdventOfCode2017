import { BaseMillisecond } from '../baseMillisecond';
import { IMillisecond, InputArray } from '../../Interface';

export class Millisecond10 extends BaseMillisecond implements IMillisecond{
    protected input: InputArray;

    protected list: any[];

    protected currentPos:number;
    protected skipSize:number;

    public solvePartOne(input: InputArray): any {
        this.input = input[0].split(',').map((x) => {
            return parseInt(x, 10);
        });

        this.currentPos = 0;
        this.skipSize = 0;
        this.generateList(256);
        this.solveARound();

        return this.list[0] * this.list[1];
    }

    public solvePartTwo(input: InputArray): any {
        this.input = [...input[0]].map((x) => {
            return x.charCodeAt(0);
        });
        this.input = this.getSecondInputArray(this.input);
        this.currentPos = 0;
        this.skipSize = 0;
        this.generateList(256);

        for (let i = 0; i < 64; i++) {
            this.solveARound();
        }

        let denseHash = this.getDenseHash();

        return this.toHexString(denseHash);
    }

    public getSecondInputArray(input: number[]) {
        return [...input, ...[17, 31, 73, 47, 23]];
    }

    public getDenseHash() {
        let denseHash = [];
        let count = 1;
        let value = 0;
        for (let j = 0; j < 256; j++) {
            if (this.list[j] === null) {
                continue;
            }
            value = value ^ this.list[j];
            if (count >= 16) {
                denseHash.push(value);
                value = 0;
                count = 1;
                continue;
            }
            count++;
        }
        return denseHash;
    }

    public solveARound() {
        for (let lenght of this.input) {
            let subSet = this.getSubSet(this.currentPos, lenght);
            let revert = this.reverseArray(subSet);
            this.replaceArrayPortion(revert, this.currentPos, lenght);
            this.currentPos += lenght + this.skipSize;
            while (this.currentPos > this.list.length) {
                this.currentPos -= this.list.length
            }
            this.skipSize++;
        }
    }

    public generateList(number: number) {
        let array = [];
        for (let i = 0; i < number; i++) {
            array.push(i);
        }
        return this.list = array;
    }

    public getSubSet(currentPos: number, lenght: any) {
        let array = [];
        for (let i = 0; i < lenght; i++) {
            array.push(this.list[currentPos]);
            currentPos++;
            if (currentPos >= this.list.length) {
                currentPos = 0;
            }
        }
        return array;
    }

    public reverseArray(subSet: any[]) {
        let array = [];
        for (let i = subSet.length - 1; i >= 0; i--) {
            array.push(subSet[i]);
        }
        return array;
    }

    public replaceArrayPortion(subset: any[], currentPos: number, lenght: number) {
        for (let i = 0; i < lenght; i++) {
            this.list[currentPos] = subset[i];
            currentPos++;
            if (currentPos >= this.list.length) {
                currentPos = 0;
            }
        }
        return this.list;
    }

    public toHexString(byteArray) {
        return Array.from(byteArray, (byte:any):string => {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('')
    }
}