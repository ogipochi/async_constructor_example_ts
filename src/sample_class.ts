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

    /**
     * init()から呼ばれる想定のコンストラクタ
     * _counterで渡された値でプロパティのcoutnerを初期化する
     * @param _counter 
     */
    private constructor(_counter: number){
        this.counter = _counter;
        console.log("[Init]", this.counter);
    }

    /**
     * 非同期でインスタンス化を実行する
     * @returns 
     */
    public static Instantiate = async (): Promise<Counter> => {
        const num = await asynReturnThree();
        return new Counter(num);
    }

    increment = () => {
        this.counter++;
        console.log("[Increment]", this.counter);
    }
}