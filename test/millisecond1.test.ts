import { expect } from 'chai';
import 'mocha';
import { Millisecond1 } from '../src/millisecond1/millisecond1';

const millisecond = new Millisecond1();
describe('Testing Millisecond 1', () => {
    describe('Part 1', () => {

        it('Should return 3 will passing \'1122\'', () => {
            expect(millisecond.solvePartOne(['1122'])).to.equal(3);
        });

        it('Should return 4 will passing \'1111\'', () => {
            expect(millisecond.solvePartOne(['1111'])).to.equal(4);
        });

        it('Should return 0 will passing \'1234\'', () => {
            expect(millisecond.solvePartOne(['1234'])).to.equal(0);
        });

        it('Should return 9 will passing \'91212129\'', () => {
            expect(millisecond.solvePartOne(['91212129'])).to.equal(9);
        });
    });

    describe('Part 2', () => {

        it('Should return 6 will passing \'1212\'', () => {
            expect(millisecond.solvePartTwo(['1212'])).to.equal(6);
        });
    });
});
