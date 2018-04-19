import { expect } from 'chai';
import 'mocha';
import { Millisecond10 } from '../src/millisecond10/millisecond10';

const millisecond = new Millisecond10();


describe('Testing Millisecond 10', () => {
    describe('Part 1', () => {
        it('should return an array of 5', () => {
            expect(millisecond.generateList(5)).to.deep.equal([0, 1, 2, 3, 4]);
        });

        it('should return the right subset', () => {
            millisecond.generateList(5);
            expect(millisecond.getSubSet(3, 3)).to.deep.equal([3, 4, 0]);
        });

        it('should reverse the array order', () => {
            millisecond.generateList(5);

            expect(millisecond.reverseArray([1, 5, 3])).to.deep.equal([3, 5, 1]);
        });

        it('should replace the array portion by the subset', () => {
            millisecond.generateList(5);
            expect(millisecond.replaceArrayPortion([0, 4, 3], 3, 3)).to.deep.equal([3, 1, 2, 0, 4]);
        });

        it('should return 12', () => {
            expect(millisecond.solvePartOne(['3', '4', '1', '5'])).to.deep.equal(2);
        });
    });
    describe('Part 2', () => {
        it('should return hash of empty', () => {
            expect(millisecond.solvePartTwo([''])).to.equal('a2582a3a0e66e6e86e3812dcb672a272');
        });
    });
});
