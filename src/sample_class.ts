import { resolve } from "path/posix"

/**
 * サンプルの非同期関数
 * 3を返す
 * @returns 
 */
const asynReturnThree = (): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    });
}

/**
 * サンプルのクラス
 * 内部に
 */
export class Counter {
    private counter: number;
    constructor(){
    }

    init = async () => {
        const num = await asynReturnThree();
        this.counter = num;
        console.log("[Init]", this.counter);
    }

    increment = () => {
        this.counter++;
        console.log("[Increment]", this.counter);
    }
}