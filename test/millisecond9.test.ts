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
    describe('Part 2', () => {
        it('should return 0 garbage', () => {
            expect(millisecond.solvePartTwo(['<>'])).to.equal(0);
        });
        it('should return 17 garbage', () => {
            expect(millisecond.solvePartTwo(['<random characters>'])).to.equal(17);
        });
        it('should return 3 garbage', () => {
            expect(millisecond.solvePartTwo(['<<<<>'])).to.equal(3);
        });
        it('should return 10 garbage', () => {
            expect(millisecond.solvePartTwo(['<{o"i!a,<{i<a>'])).to.equal(10);
        });
    });
});
