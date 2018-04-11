
export interface InputArray extends Array<any> {
    [index: number]: any;
}

export interface IMillisecond {
    solvePartOne(input: InputArray): any;
    solvePartTwo(input: InputArray): any;
}
