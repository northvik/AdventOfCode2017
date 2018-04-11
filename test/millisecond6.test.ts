import { expect } from 'chai';
import 'mocha';
import { Millisecond6 } from '../src/millisecond6/millisecond6';

const millisecond = new Millisecond6();

describe('Testing Millisecond 6', () => {
    describe('Part 1', () => {
        it('should return 5 steps', () => {
            expect(millisecond.solvePartOne([0, 2, 7, 0])).to.equal(5);
        });
    });
    describe('Part 2', () => {
        it('should return 4 steps', () => {
            expect(millisecond.solvePartTwo([0, 2, 7, 0])).to.equal(4);
        });
    });
});
