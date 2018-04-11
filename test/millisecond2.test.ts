import { expect } from 'chai';
import 'mocha';
import { Millisecond2 } from '../src/millisecond2/millisecond2';

const millisecond = new Millisecond2();
describe('Testing Millisecond 2', () => {
    describe('Part 1', () => {

        it('Should read the grid', () => {
            millisecond.solvePartOne(['5,1,9,5', '7,5,3', '2,4,6,8']);
            expect(millisecond.grid).to.deep.equal({
                '0': [5, 1, 9, 5],
                '1': [7, 5, 3],
                '2': [2, 4, 6, 8]
            });
        });

        it('Should return 8, 4, 6', () => {
            millisecond.solvePartOne(['5,1,9,5', '7,5,3', '2,4,6,8']);
            expect(millisecond.getGridOfSum()).to.deep.equal({
                '0': 8,
                '1': 4,
                '2': 6
            });
        });

        it('Should return the checksum 18', () => {
            expect(millisecond.solvePartOne(['5,1,9,5', '7,5,3', '2,4,6,8'])).to.equal(18);
        });
    });

    describe('Part 2', () => {
        it('Should return 4,3,2', () => {
            millisecond.solvePartOne(['5,9,2,8', '9,4,7,3', '3,8,6,5']);
            expect(millisecond.getGridOfDivide()).to.deep.equal({
                '0': 4,
                '1': 3,
                '2': 2
            });
        });

        it('Should return 9', () => {
            expect(millisecond.solvePartTwo(['5,9,2,8', '9,4,7,3', '3,8,6,5'])).to.equal(9);
        });
    });
});
