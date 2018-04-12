export class BaseMillisecond {
    protected log(toLog: any): void {
        // tslint:disable-next-line
        console.log(JSON.stringify(toLog, undefined, 2));
    }
}