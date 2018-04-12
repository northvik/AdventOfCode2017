import * as _ from "lodash";
import { IMillisecond, InputArray } from '../../Interface';
import { BaseMillisecond } from '../baseMillisecond';

export interface ITower {
    name: string;
    weight: number;
    totalWeight: number,
    onDiscNames: string[],
    onDisc: ITower[];
}

export class Millisecond7 extends BaseMillisecond implements IMillisecond {
    private towers: ITower[];
    private towerTree: ITower;

    public solvePartOne(input: InputArray): any {
        this.towers = [];
        this.parseInput(input);
        return this.getFirstTowerName();
    }

    public solvePartTwo(input: InputArray): any {
        this.towers = [];
        this.parseInput(input);
        this.getTree();
        return this.getWeightAnomaly(this.towerTree);
    }

    protected parseInput(input: InputArray): void {
        const regex = new RegExp(/([a-z]+) \(([0-9]+)\)( ->([a-z ,]+))?/);
        for (const row of input) {
            let result = regex.exec(row);
            let onDiscNames = [];
            if (typeof result[4] === 'string' && result[4].length > 1) {
                onDiscNames = result[4].replace(/ /g, '').split(',');
            }
            this.towers.push({
                name: result[1],
                weight: parseInt(result[2], 10),
                totalWeight: parseInt(result[2], 10),
                onDiscNames: onDiscNames,
                onDisc: []
            });
        }
    }

    protected getFirstTowerName(): string {
        let onDiscNames = [];
        let names = [];
        for (let tower of this.towers) {
            names.push(tower.name);
            for (let onDTower of tower.onDiscNames) {
                onDiscNames.push(onDTower);
            }
        }
        const result = _.difference(names, _.uniq(onDiscNames));
        return result[0];
    }

    protected getTree() {
        const firstTower = _.find(this.towers, {name: this.getFirstTowerName()});
        this.towerTree = this.buildTree(firstTower);
    }

    protected buildTree(tower: ITower): ITower {
        if (tower.onDiscNames){
            for (let towerName of tower.onDiscNames) {
                let findTower = _.find(this.towers, {name: towerName});
                if (findTower){
                    tower.onDisc.push(this.buildTree(findTower));
                    tower.totalWeight += findTower.totalWeight;
                }
            }
        }
        return tower;
    }

    protected getWeightAnomaly(tower: ITower) {
        let subTowerTotal = [];
        for (let subTower of tower.onDisc) {
            subTowerTotal.push(subTower.totalWeight);
        }
        if (_.uniq(subTowerTotal).length > 1){
            const min = this.getMinority(subTowerTotal);
            const maj = this.getMajority(subTowerTotal);

            for (let subTower of tower.onDisc) {
                if (subTower.totalWeight === min){
                    if (subTower.onDisc.length > 0){
                        let number = this.getWeightAnomaly(subTower);
                        if (number) {
                            return number
                        }
                    }
                    return subTower.weight - (min - maj);
                }
            }
        }
        return false;
    }

    protected getMajority(arr){
        return arr.sort((a,b) =>
            arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    protected getMinority(arr){
        return arr.sort((a,b) =>
            arr.filter(v => v===b).length
            - arr.filter(v => v===a).length
        ).pop();
    }
}