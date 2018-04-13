import { expect } from 'chai';
import 'mocha';
import { Millisecond8 } from '../src/millisecond8/millisecond8';

const millisecond = new Millisecond8();
const input = [
        'b inc 5 if a > 1',
        'a inc 1 if b < 5',
        'c dec -10 if a >= 1',
        'c inc -20 if c == 10'
    ];

describe('Testing Millisecond 8', () => {
    describe('Part 1', () => {

        it('should parse and play the instruction the line 1', () => {
            millisecond.parseInput(['b inc 5 if a > 1']);
            millisecond.playInstructions();
            expect(millisecond.registers).to.deep.equal({});
        });
        it('should parse and play the instruction the line 2', () => {
            millisecond.parseInput(['b inc 5 if a > 1', 'a inc 1 if b < 5']);
            millisecond.playInstructions();
            expect(millisecond.registers).to.deep.equal({a: 1});
        });

        it('should parse and play the full instruction', () => {
            millisecond.parseInput(input);
            millisecond.playInstructions();
            expect(millisecond.registers).to.deep.equal({a: 1, c: -10});
        });
        it('should return 1', () => {
            expect(millisecond.solvePartOne(input)).to.equal(1);
        });
    });
    describe('Part 2', () => {
        it('should return highest ever number 10', () => {
            expect(millisecond.solvePartTwo(input)).to.equal(10);
        });
    });
});
