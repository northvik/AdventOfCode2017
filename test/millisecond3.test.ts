import { expect } from 'chai';
import 'mocha';
import { Millisecond3 } from '../src/millisecond3/millisecond3';

const millisecond = new Millisecond3();
describe('Testing Millisecond 3', () => {
    describe('Part 1', () => {
        it('Should return 0 for input 1', () => {
            expect(millisecond.solvePartOne([1])).to.equal(0);
        });
        it('Should return 3 for input 12', () => {
            expect(millisecond.solvePartOne([12])).to.equal(3);
        });
        it('Should return 2 for input 23', () => {
            expect(millisecond.solvePartOne([23])).to.equal(2);
        });
        it('Should return 31 for input 1024', () => {
            expect(millisecond.solvePartOne([1024])).to.equal(31);
        });
        it('Should return 4 for input 17', () => {
            expect(millisecond.solvePartOne([17])).to.equal(4);
        });
    });
    //
    // describe('Testing Millisecond 3 part 2', () => {
    //
    // });
});

