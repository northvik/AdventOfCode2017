import { BaseMillisecond } from '../baseMillisecond';
import { IMillisecond, InputArray } from '../../Interface';

export class Millisecond8 extends BaseMillisecond implements IMillisecond {
    protected instructions = {};
    public registers = {};

    public solvePartOne(input: InputArray): any {
        this.registers = {};
        this.parseInput(input);
        this.playInstructions();
        return this.getTopValue();
    }

    public solvePartTwo(input: InputArray): any {
        return input[0];
    }

    public parseInput(input: InputArray): void {
        this.registers = {};
        this.instructions = {};
        const regex = new RegExp(/([a-z]+) (inc|dec) ([-0-9]+) if ([a-z]+) ([<>=!]+) ([-0-9]+)/);
        let i = 0;
        for (const row of input) {
            let result = regex.exec(row);
            this.instructions[i] = {
                order: i,
                register: result[1],
                increase: result[2] === 'inc',
                amount: parseInt(result[3], 10),
                condition: {
                    register: result[4],
                    condition: result[5],
                    value: result[6]
                }
            };
            i++;
        }
    }

    public playInstructions() {
        for (let i = 0; i < Object.keys(this.instructions).length; i++) {
            const instruction = this.instructions[i];
            if (this.checkCondition(instruction)) {
                if (instruction.increase) {
                    this.registers[instruction.register] = this.getRegisterValue(instruction.register) + instruction.amount;
                } else {
                    this.registers[instruction.register] = this.getRegisterValue(instruction.register) - instruction.amount;
                }
            }
        }
    }

    protected checkCondition(instruction) {
        switch (instruction.condition.condition) {
            case '>':
                return this.getRegisterValue(instruction.condition.register) > instruction.condition.value;
            case '>=':
                return this.getRegisterValue(instruction.condition.register) >= instruction.condition.value;

            case '<':
                return this.getRegisterValue(instruction.condition.register) < instruction.condition.value;
            case '<=':
                return this.getRegisterValue(instruction.condition.register) <= instruction.condition.value;

            case '==':
                return this.getRegisterValue(instruction.condition.register) == instruction.condition.value;
            case '!=':
                return this.getRegisterValue(instruction.condition.register) !== instruction.condition.value;
        }
    }

    protected getRegisterValue(name: string): number {
        if (this.registers[name] === undefined){
            return 0;
        }
        return this.registers[name];
    }

    protected getTopValue(): number {
        let top = -1000000000000000;
        for (let key of Object.keys(this.registers)) {
            const register = this.registers[key];
            if (register > top) {
                top = register;
            }
        }
        return top;
    }
}