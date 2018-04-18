import { expect } from 'chai';
import 'mocha';
import { Millisecond9 } from '../src/millisecond9/millisecond9';

const millisecond = new Millisecond9();


describe('Testing Millisecond 9', () => {
    describe('Part 1', () => {

        it('should score 1', () => {
            expect(millisecond.solvePartOne(['{}'])).to.equal(1);
        });
        it('should score 3', () => {
            expect(millisecond.solvePartOne(['{{{}}}'])).to.equal(6);
        });
        it('should score 3', () => {
            expect(millisecond.solvePartOne(['{{},{}}'])).to.equal(5);
        });
        it('should score 6', () => {
            expect(millisecond.solvePartOne(['{{{},{},{{}}}}'])).to.equal(16);
        });
        it('should score 1', () => {
            expect(millisecond.solvePartOne(['{<{},{},{{}}>}'])).to.equal(1);
        });
        it('should score 1', () => {
            expect(millisecond.solvePartOne(['{<a>,<a>,<a>,<a>}'])).to.equal(1);
        });
        it('should score 3', () => {
            expect(millisecond.solvePartOne(['{{<a!>},{<a!>},{<a!>},{<ab>}}'])).to.equal(3);
        });
    });
    // describe('Part 2', () => {
    //     it('should return highest ever number 10', () => {
    //         expect(millisecond.solvePartTwo(input)).to.equal(10);
    //     });
    // });
});
