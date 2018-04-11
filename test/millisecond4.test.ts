import { expect } from 'chai';
import 'mocha';
import { Millisecond4 } from '../src/millisecond4/millisecond4';

const millisecond = new Millisecond4();
describe('Testing Millisecond 4', () => {
    describe('Part 1', () => {
        it('should be true', () => {
            expect(millisecond.solvePartOne(['aa bb cc dd ee'])).to.equal(1);
        });
        it('should be false', () => {
            expect(millisecond.solvePartOne(['aa bb cc dd aa'])).to.equal(0);
        });
        it('should be true', () => {
            expect(millisecond.solvePartOne(['aa bb cc dd aaa'])).to.equal(1);
        });
    });

    describe('Part 2', () => {
        it('should be true', () => {
            expect(millisecond.solvePartOne(['abcde fghij'])).to.equal(1);
        });
        it('should be false', () => {
            expect(millisecond.solvePartTwo(['abcde xyz ecdab'])).to.equal(0);
        });
        it('should be true', () => {
            expect(millisecond.solvePartOne(['a ab abc abd abf abj'])).to.equal(1);
        });
        it('should be true', () => {
            expect(millisecond.solvePartOne(['iiii oiii ooii oooi oooo'])).to.equal(1);
        });
        it('should be false', () => {
            expect(millisecond.solvePartTwo(['oiii ioii iioi iiio'])).to.equal(0);
        });
    });
});
