import * as _ from "lodash";
import { IMillisecond, InputArray } from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

export class Millisecond7 extends BaseMillisecond implements IMillisecond {
    private towers;

    public solvePartOne(input: InputArray): any {
        this.towers = [];
        this.parseInput(input);
        return this.getFirstTower();
    }

    public solvePartTwo(input: InputArray): any {
        return 'Not Solved ' + input[0];
    }

    protected parseInput(input: InputArray): void {
        const regex = new RegExp(/([a-z]+) \(([0-9]+)\)( ->([a-z ,]+))?/);
        for (const row of input) {
            let result = regex.exec(row);
            let onDisc = [];
            if (typeof result[4] === 'string' && result[4].length > 1) {
                onDisc = result[4].replace(/ /g, '').split(',');
            }
            this.towers.push({
                name: result[1],
                weight: result[2],
                onDisc: onDisc
            });
        }
    }

    protected getFirstTower(): string {
        let onDisc = [];
        let names = [];
        for (let tower of this.towers) {
            names.push(tower.name);
            for (let onDTower of tower.onDisc) {
                onDisc.push(onDTower);
            }
        }
        const result = _.difference(names, _.uniq(onDisc));
        return result[0];
    }
}