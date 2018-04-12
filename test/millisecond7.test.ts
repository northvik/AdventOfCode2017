import { expect } from 'chai';
import 'mocha';
import { Millisecond7 } from '../src/millisecond7/millisecond7';

const millisecond = new Millisecond7();
const input = [
        'pbga (66)',
        'xhth (57)',
        'ebii (61)',
        'havc (66)',
        'ktlj (57)',
        'fwft (72) -> ktlj, cntj, xhth',
        'qoyq (66)',
        'padx (45) -> pbga, havc, qoyq',
        'tknk (41) -> ugml, padx, fwft',
        'jptl (61)',
        'ugml (68) -> gyxo, ebii, jptl',
        'gyxo (61)',
        'cntj (57)'
    ];

const input2 = [
    'pbga (66)',
    'xhth (57)',
    'ebii (61)',
    'havc (66)',
    'ktlj (57)',
    'fwft (3) -> ktlj, cntj, xhth',
    'qoyq (66)',
    'padx (45) -> pbga, havc, qoyq',
    'tknk (41) -> ugml, padx, fwft',
    'jptl (61)',
    'ugml (60) -> gyxo, ebii, jptl',
    'gyxo (61)',
    'cntj (57)'
];

describe('Testing Millisecond 7', () => {
    describe('Part 1', () => {
        it('should return 5 steps', () => {
            expect(millisecond.solvePartOne(input)).to.equal('tknk');
        });
    });
    describe('Part 2', () => {
        it('should return weight 60', () => {
            expect(millisecond.solvePartTwo(input)).to.equal(60);
        });
        it('should return weight 72', () => {
            expect(millisecond.solvePartTwo(input2)).to.equal(72);
        });
    });
});
