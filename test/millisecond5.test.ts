import { expect } from 'chai';
import 'mocha';
import { Millisecond5 } from '../src/millisecond5/millisecond5';

const millisecond = new Millisecond5();
describe('Testing Millisecond 5', () => {
    describe('Part 1', () => {
        it('should return 5 steps', () => {
            expect(millisecond.solvePartOne([0, 3, 0, 1, -3])).to.equal(5);
        });
    });

    describe('Part 2', () => {
        it('should return 10 steps', () => {
            expect(millisecond.solvePartTwo([0, 3, 0, 1, -3])).to.equal(10);
        });
    });
});
