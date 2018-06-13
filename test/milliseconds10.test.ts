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
        it('should return the right input array', () => {
            expect(millisecond.getSecondInputArray([...'1,2,3'].map((x) => {
                        return x.charCodeAt(0);
                    }))
                ).to.deep.equal([49, 44, 50, 44, 51, 17, 31, 73, 47, 23]);
        });
        it('should return a densehash of 64', () => {
            millisecond.solvePartTwo(['1,2,3']);
            expect(millisecond.getDenseHash()[0]).to.equal(64);
        });
    });
});
